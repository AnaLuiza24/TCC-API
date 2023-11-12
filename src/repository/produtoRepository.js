import connection from "./connection.js";


export async function listarMarcas() {
    let sql =  `select 
                    nm_marca as marca, 
                    id_marca as id 
                from tb_marca`;

    let [dados] = await connection.query(sql);
    return dados;
}

export async function listarCategorias() {
    let sql =  `select 
                    ds_categoria as categoria, 
                    id_categoria as id 
                from tb_categoria`;

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
    let sql =  `insert into tb_produto 
                    (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
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

export async function consultarProduto(nome) {
    let sql = 'select id_produto as id, nm_produto as nome from tb_produto where nm_produto = ?';

    let [dados] = await connection.query(sql, [nome]);

    return dados;
}

export async function alterarImageUm(imagem, id) {
    let sql =  `update tb_produto 
                    set url_imagem_um = ? 
                where id_produto = ?`;

    const [dados] = await conexao.query(sql, [imagem, id]);
    return dados.affectedRows;
}

export async function alterarImageDois(imagem, id) {
    let sql = 'update tb_produto set url_imagem_dois = ? where id_produto = ?';

    const [dados] = await conexao.query(sql, [imagem, id]);
    return dados.affectedRows;
}

export async function listarPorMarca(marca) {
    let sql =  `select 
                    ds_imagem as imagem, 
                    nm_produto as nome, 
                    vl_preco as preco, 
                    vl_preco_promocao as promocao, 
                    tb_produto.id_produto 
                from tb_imagem 
                    inner join tb_produto on tb_imagem.id_produto = tb_imagem.id_produto 
                where id_marca like ? and id_categoria like 2`;

    let [dados] = await connection.query(sql, [marca]);
    return dados;
}

