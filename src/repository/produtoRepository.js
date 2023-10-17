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
    let sql = 'select nm_produto as produto, vl_preco as preco, ds_categoria as categoria, nr_quantidade as qtd, id_produto as id from tb_produto inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria';

    let [dados] = await connection.query(sql);
    return dados;
}

export async function nomeProduto(nome) {
    let sql = 'select nm_produto as produto, vl_preco as preco, ds_categoria as categoria, nr_quantidade as qtd, id_produto as id from tb_produto inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria where nm_produto like ?';

    let [dados] = await connection.query(sql, ["%" + nome + "%"]);
    return dados;
}

export async function deletarProduto(id) {
    let sql = 'delete from tb_produto where id_produto = ?';
    let [dados] = await connection.query(sql, [id]);

    return dados.affectedRows;
}

export async function adicionarProduto(produto) {
    let sql = `insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
    values (?, ?, ?, ?, ?, ?, ?, ?)`;

    let [dados] = await connection.query(sql, [
        produto.marca,
        produto.categoria,
        produto.nome,
        produto.preco,
        produto.cor,
        produto.qtd,
        produto.desc,
        produto.precopromo
    ]);

    produto.id = dados.insertId;
    return produto;
}