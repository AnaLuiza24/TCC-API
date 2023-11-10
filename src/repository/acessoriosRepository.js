import connection from "./connection.js";

export async function ConsultarAcessorios(marca) {
    let sql = `select nm_produto        as produto, 
                      vl_preco          as preco, 
                      ds_cor            as cores, 
                      nr_quantidade     as qtd, 
                      ds_produto        as descri, 
                      vl_preco_promocao as promocao, 
                      url_imagem_um     as img1, 
                      url_imagem_dois   as img2, 
                      id_produto        as id 
                from tb_produto 
          inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
               where id_marca = ?
          `;

    let [dados] = await connection.query(sql, [marca]);
    return dados;
}




export async function ListarTodosAcessorios() {
    let sql = `select nm_produto        as produto, 
                      vl_preco          as preco, 
                      ds_cor            as cores, 
                      nr_quantidade     as qtd, 
                      ds_produto        as descri, 
                      vl_preco_promocao as promocao, 
                      url_imagem_um     as img1, 
                      url_imagem_dois   as img2, 
                      id_produto        as id 
                from tb_produto 
          inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
  
          `;

    let [dados] = await connection.query(sql);
    return dados;
}
