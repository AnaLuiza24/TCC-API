import connection from "./connection.js";

export async function listarProduto() {
    let sql = 'select nm_modelo as produto, vl_preco as preco, ds_categoria as categoria, bt_disponivel as disponibilidade, id_produto as id from tb_produto inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria';

    let [dados] = await connection.query(sql);
    return dados;
}

export async function deletarProduto(id) {
    let sql = 'delete from tb_produto where id_produto = ?';
    let [dados] = await connection.query(sql, [id]);

    return dados.affectedRows;
}