import connection from "./connection.js";

export async function consultarTodos(email, senha) {
    let comando = `select * from tb_admin where ds_email like ? and ds_senha like ?`

    let [dados] = await connection.query(comando, ['%'+email+'%', '%'+senha+'%']);
    return dados;
  }