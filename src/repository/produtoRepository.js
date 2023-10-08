import connection from "./connection.js";


export async function listarMarcas() {
    let sql = 'select nm_marca as marca, id_marca as id from tb_marca';
    let [dados] = await connection.query(sql);
    return dados;
}

export async function listarCategorias() {
    let sql = 'select ds_categoria as categoria, id_categoria as id from tb_categoria';
    let [dados] = await connection.query(sql);
    return dados;
}

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

export async function adicionarProduto() {
    let sql = `insert into tb_produto (id_marca, id_categoria, nm_modelo, vl_preco, ds_cor, bt_disponivel, ds_produto, vl_preco_promocao) 
    values (?, ?, ?, ?, ?, ?, ?, ?);`

    let [dados] = await connection.query(sql);
    return dados;

}