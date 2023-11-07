import connection from "./connection.js";

export async function AdicionarCliente(pessoa) {
    let sql = 'insert into tb_cliente (nm_cliente, ds_email, ds_senha, dt_nascimento, ds_telefone) values (?, ?, ?, ?, ?)';

    let [dados] = await connection.query(sql, [
        pessoa.nome,
        pessoa.email,
        pessoa.senha,
        pessoa.nasc,
        pessoa.telefone
    ])

    pessoa.id = dados.insertId;
    return pessoa;
}

export async function listarCliente() {
    let sql = 'select nm_cliente as nome, ds_email as email, dt_nascimento as nasc, ds_telefone as telefone from tb_cliente';

    let [dados] = await connection.query(sql);
    return dados;
}

export async function buscarNome(nome) {
    let sql = 'select nm_cliente as nome, ds_email as email, dt_nascimento as nasc, ds_telefone as telefone from tb_cliente where nm_cliente like ?';

    let [dados] = await connection.query(sql, ['%' + nome + '%']);
    return dados;
}

export async function verificarLogin(email,senha) {

    const comando = `
      SELECT 
      id_cliente as id,
      nm_cliente as nome,
      ds_email as email, 
      ds_senha as senha
      FROM tb_cliente
      where ds_email = ?
      and ds_senha = ?
    `;
    
    let respostas = await connection.query(comando, [email,senha]);
    
    let linhas = respostas[0];
    let linha = linhas[0];
    console.log(linha)
  
    return linha;
}
