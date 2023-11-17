import connection from "./connection.js";

export async function ListarTodosAcessorios() {
      let sql =  `select
                        url_imagem_um     as img1, 
                        url_imagem_dois   as img2,  
                        nm_produto        as nome,
                        vl_preco          as preco, 
                        vl_preco_promocao as promocao, 
                        tb_produto.id_produto 
                  from tb_produto 
                  where id_categoria like 1`;

    let [dados] = await connection.query(sql);
    return dados;
}

export async function ProdutoAcessorios(id) {
      let sql =  `select
                        url_imagem_um     as img1, 
                         url_imagem_dois   as img2,  
                        nm_produto        as nome,
                        vl_preco          as preco, 
                        vl_preco_promocao as promocao, 
                        tb_produto.id_produto 
                  from tb_produto 
                  where id_categoria like 1
                        and id_marca = ?`;

      const [linhas] = await connection.query(sql, [id]);
      return linhas[0];
}
