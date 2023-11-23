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
  };

  export async function listarPedidos(nome, produto, valor, pagamento,  situacao) {
    let sql = `select tb_cliente.nm_cliente       as nome,
                      tb_produto.nm_produto       as produto,
                      vl_pedido                   as valor,
                      ds_forma_pagamento         as pagamento,
                      tb_situacao.ds_situacao		as situacao
                      from tb_pedido
                  inner join tb_produto on tb_produto.id_produto = tb_pedido.id_produto
                  inner join tb_cliente on tb_cliente.id_cliente = tb_pedido.id_cliente
                  inner join tb_situacao on tb_situacao.id_situacao = tb_pedido.id_situacao`

    let [dados] = await connection.query(sql, [nome, produto, valor, pagamento, situacao]);
    return dados
  }