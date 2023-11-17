import connection from "./connection.js";

export async function AdicionarCliente(pessoa) {
    let sql = `insert into tb_cliente 
                    (nm_cliente, ds_email, ds_senha, dt_nascimento, ds_telefone) 
               values (?, ?, ?, ?, ?)`;

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

export async function consultar(cliente) {
    let sql =  `select
                    nm_cliente as nome,
                    ds_email as email,
                    ds_telefone as telefone 
                from tb_cliente where ds_email like ?`;

    let [dados] = await connection.query(sql, [cliente]);
    return dados;
}

export async function listarCliente() {
    let sql =  `select 
                    nm_cliente as nome,
                    ds_email as email, 
                    dt_nascimento as nasc,
                    ds_telefone as telefone 
                from tb_cliente`;

    let [dados] = await connection.query(sql);
    return dados;
}

export async function buscarNome(nome) {
    let sql =  `select 
                    nm_cliente as nome, 
                    ds_email as email, 
                    dt_nascimento as nasc, 
                    ds_telefone as telefone 
                from tb_cliente where nm_cliente like ?`;

    let [dados] = await connection.query(sql, ['%' + nome + '%']);
    return dados;
}

export async function verificarLogin(email,senha) {

    let sql =  `select 
                    id_cliente as id,
                    nm_cliente as nome,
                    ds_email as email, 
                    ds_senha as senha
                from tb_cliente
                where ds_email = ?
                    and ds_senha = ?`;
    
    let respostas = await connection.query(sql, [email,senha]);
    
    let linhas = respostas[0];
    let linha = linhas[0];
    console.log(linha)
  
    return linha;
}
export async function alterarcliente(cliente) {
    
        let sql = `
            UPDATE tb_cliente
            SET nm_cliente = ?,
                ds_email = ?,
                dt_nascimento  = ?,
                ds_telefone  = ?
            WHERE id_cliente = ?`;

        const [dados] = await connection.query(sql, [
            cliente.nome,
            cliente.email ,
            cliente.nascimento,
            cliente.telefone,
            cliente.id
        ]);

        return dados;
} 

export async function alterarsenha(cliente) {
    
    let sql = `
        UPDATE tb_cliente
        SET  ds_senha = ?
        WHERE id_cliente = ?`;

    const [dados] = await connection.query(sql, [
        cliente.senha
       
    ]);

    return dados;
} 





