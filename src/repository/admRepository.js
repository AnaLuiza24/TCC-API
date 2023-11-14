import connection from "./connection.js";

export async function loginAdm(email, senha) {
    let sql = `select 
                    id_admin as id, 
                    nm_admin as nome, 
                    ds_email as email, 
                    ds_senha as senha 
               from tb_admin 
               where ds_email like ? and ds_senha like ?`;

    let [dados] = await connection.query(sql, [email, senha]);
    return dados[0];
  }