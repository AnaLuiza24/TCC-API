import connection from "./connection";

export async function buscarProduto(nomeProduto) {
    let sql =  `select 
                    nm_produto as produto, 
                    vl_preco as preco, 
                    ds_categoria as categoria, 
                    nr_quantidade as qtd, 
                    id_produto as id from tb_produto 
                inner join tb_categoria 
                    on tb_categoria.id_categoria = tb_produto.id_categoria 
                where nm_produto like ?`;

                let [dados] = await connection.query(sql, ["%" + nomeProduto + "%"]);
                return dados;
}