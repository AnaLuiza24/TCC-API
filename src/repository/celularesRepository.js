import connection from "./connection.js";

export async function ConsultarSmartphones(marca) {
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

    let [dados] = await connection.query(sql, [marca]);
    return dados;
}

export async function listarTodosSmartphones() {
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