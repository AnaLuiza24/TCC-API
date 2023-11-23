import connection from "./connection.js";

export async function ListarTodosAcessorios(pagina) {
      pagina = (pagina - 1) * 9;
      let sql =  `select
                        url_imagem_um     as img1, 
                        url_imagem_dois   as img2, 
                        nm_produto        as nome,
                        vl_preco          as preco, 
                        vl_preco_promocao as promocao, 
                        tb_produto.id_produto 
                  from tb_produto 
                  where id_categoria like 2
                  order by nm_produto`;

    let [dados] = await connection.query(sql, [pagina]);
    return dados;
}

export async function ConsultarAcessorios(marca) {
      let sql =  `select
                        url_imagem_um     as imagem, 
                        nm_produto        as nome,
                        vl_preco          as preco, 
                        vl_preco_promocao as promocao, 
                        tb_produto.id_produto 
                  from tb_produto 
                  where id_categoria like 2 
                        and id_marca = ?`;
  
      let [dados] = await connection.query(sql, [marca]);
      return dados;
  }
