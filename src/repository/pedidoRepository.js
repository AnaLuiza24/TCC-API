import connection from "./connection.js";

export async function adicionarEndereco(endereco) {
    let sql =  `insert into tb_endereco 
                    (nm_destinatario, ds_cep, ds_endereco, ds_bairro, ds_cidade, ds_estado, nr_endereco, ds_complemento) 
                values (?, ?, ?, ?, ?, ?, ?, ?)`;

    let [dados] = await connection.query(sql, [
        endereco.destinatario,
        endereco.cep,
        endereco.desc,
        endereco.bairro,
        endereco.cidade,
        endereco.estado,
        endereco.numero,
        endereco.complemento
    ]);

    endereco.id = dados.insertId;
    return endereco;
}