create database db_smart_seven;
use db_smart_seven;
drop database db_smart_seven;

 create table tb_admin (
        id_admin 	int primary key auto_increment,
        nm_admin    varchar(200) not null,
        ds_email 	varchar(200) not null,
        ds_senha 	varchar(200) not null
    );
    drop table tb_admin;

    select * from tb_admin;
    insert into tb_admin (nm_admin, ds_email, ds_senha)
        value ('Vitória' ,'vitoria@gmail.com', '1234');
    insert into tb_admin (nm_admin, ds_email, ds_senha)
        value ('Gustavo' ,'gustavo@gmail.com', '1234');
    

    -- TABLE RED

    create table tb_categoria(
        id_categoria	int primary key auto_increment,
        ds_categoria	varchar(200) not null
    );
    select * from tb_categoria;
    drop table tb_categoria;
    insert into tb_categoria (ds_categoria)
        values ('Smartphones');
    insert into tb_categoria (ds_categoria)
        values ('Acessorios');


    create table tb_marca(
        id_marca	int primary key auto_increment,
        nm_marca	varchar(100) not null
    );
    select * from tb_marca;
    insert into tb_marca (nm_marca)
        values ('Smartphones Iphone');
    insert into tb_marca (nm_marca)
        values ('Smartphones Samsung');
    insert into tb_marca (nm_marca)
        values ('Smartphones Motorola');
    insert into tb_marca (nm_marca)
        values ('Smartphones Xiaomi');
    insert into tb_marca (nm_marca)
        values ('Capinhas Iphone');
    insert into tb_marca (nm_marca)
        values ('Capinhas Samsung');
    insert into tb_marca (nm_marca)
        values ('Capinhas Motorola');
    insert into tb_marca (nm_marca)
        values ('Capinhas Xiaomi');
    insert into tb_marca (nm_marca)
        values ('Carregadores Cabo Light ');
    insert into tb_marca (nm_marca)
        values ('Carregadores Tipo C ');
    insert into tb_marca (nm_marca)
        values ('Carregadores Tipo USB ');
    insert into tb_marca (nm_marca)
        values ('Fones Bluetooh ');
    insert into tb_marca (nm_marca)
        values ('Fones Com fio');
        


    create table tb_produto(
        id_produto 			int primary key auto_increment,
        id_marca			int,
        id_categoria		int,
        nm_produto			varchar(200) not null,
        vl_preco			decimal(15,2) not null,
        ds_cor				varchar(200) not null,
        nr_quantidade		int,
        ds_produto			varchar(200) not null,
        vl_preco_promocao	decimal(15,2) not null,
        url_imagem_um 		varchar(200),
        url_imagem_dois 		varchar(200),
        foreign key (id_marca) references tb_marca(id_marca),
        foreign key (id_categoria) references tb_categoria(id_categoria)
    );
    select * from tb_produto;
    drop table tb_produto;
    delete from tb_produto where id_produto = ?;

    select nm_produto as produto, vl_preco as preco, ds_cor as cores, nr_quantidade as qtd, ds_produto as descri, vl_preco_promocao as promocao, url_imagem_um as img1, url_imagem_dois as img2, id_produto as id 
        from tb_produto inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria;

    select nm_produto as produto, vl_preco as preco, ds_categoria as categoria, nr_quantidade as qtd, id_produto as id 
    from tb_produto inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria;
    


    
        -- Produtos Smartphones

    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
        values (1, 1, 'Iphone 15', 7569.00, 'Azul', 50, 'Apple iPhone 15 128GB. O sistema de câmera dupla mais avançado em um iPhone', 6969.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 15 Pro', 7999.00, 'Branco', 40, 'Apple iPhone 15 Pro 128GB. O sistema de câmera tripla mais avançado em um iPhone', 7799.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 15 Pro Max', 8439.00, 'Preto', 30, 'Apple iPhone 15 Pro Max 128GB. O sistema de câmera tripla mais avançado em um iPhone', 8199.00 );
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 14', 4899.00, 'Roxo', 60, 'Apple iPhone 14 128GB. O sistema de câmera dupla mais avançado em um iPhone', 4489.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
        values (1, 1, 'Iphone 14 Pro', 5489.00, 'Preto', 50, 'Apple Iphone 14 Pro 128GB. O sistema de câmera dupla mais avançado em um iPhone', 5099.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
        values (1, 1, 'Iphone 14 Pro Max', 5979.00, 'Azul', 40, 'Apple Iphone 14 Pro Max 128GB. O sistema de câmera dupla mais avançado em um iPhone', 5780.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 13', 4639.00, 'Branco', 70, 'Apple iPhone 13. A capinha mais avançado em um iPhone', 4399.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 13 Pro', 4899.00, 'Rosa', 60, 'Apple iPhone 13 Pro. A capinha mais avançado em um iPhone', 4759.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 13 Pro Max', 5199.00, 'Douradp', 50, 'Apple iPhone 13 Pro Max. A capinha mais avançado em um iPhone', 5000.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 12', 4149.00, 'Roxo', 80, 'Apple iPhone 12. A capinha mais avançado em um iPhone', 4059.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 12 Pro', 4729.00, 'vermelho', 70, 'Apple iPhone 12 Pro. A capinha mais avançado em um iPhone', 4600.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 12 Pro MAx', 4999.00, 'azul', 60, 'Apple iPhone 12 Pro Max. A capinha mais avançado em um iPhone', 4800.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 11', 3499.00, 'Branco', 7, 'Apple iPhone 11. A capinha mais avançado em um iPhone', 3359.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 11 Pro', 3699.00, 'Preto', 7, 'Apple iPhone 11 Pro. A capinha mais avançado em um iPhone', 3559.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (1, 1, 'Iphone 11 Pro Max', 3899.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
            
            
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung S20 Fe', 2073.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung S20 Ultra ', 4914.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung S21 Fe', 2321.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung S21 Ultra', 5401.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung S22 Fe', 2998.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung S22 Ultra', 5871.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung S23 Fe', 3284.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung S23 Ultra', 6032.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung Galaxy Z Flip 4', 3499.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung Galaxy Z Flip 5',  4389.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung Galaxy Z Fold 4', 8559.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (2, 1, 'Samsung Galaxy Z Fold 5', 12799.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);

            
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola G14', 999.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola G23', 1098.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola G52', 1247.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola G53', 1289.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola G54', 1398.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola G73', 1776.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola G84', 1899.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola Edge 30 Neo', 1471.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola Edge 30 Fusion', 2539.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola Edge 30 Ultra', 4888.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola Edge 40', 2249.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
    insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (3, 1, 'Motorola Edge 40 Neo', 2799.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3659.00);
            
            
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi Redmi 10', 999.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 848.00);
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi Redmi Note 11s', 1310.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 1199.00);
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi Redmi 12 Lite', 2184.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 2084.00);
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi Redmi 12s', 1329.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 1129.00);
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi Redmi Note 12 Pro', 1599.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 1599.00);
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi Redmi 13', 4227.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 4027.00);
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi Redmi 13 Ultra', 3199.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 2947.00);
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi Mi 11T', 3429.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 3259.00);
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi K60 Ultra', 1975.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 1775.00);
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi Poco C65', 1390.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 1090.00);
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi Poco M5s', 1400.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 1158.00);
        insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
            values (4, 1, 'Xiaomi Poco X5', 1534.00, 'Roxo', 7, 'Apple iPhone 11 Pro Max. A capinha mais avançado em um iPhone', 1296.00);
        
            
    
    -- Produtos Acessorios
               
    
    
        select nm_modelo as produto, vl_preco as preco, ds_categoria as categoria, bt_disponivel as disponibilidade 
        from tb_produto 
    inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria;



    -- TABLE CLIENT

    create table tb_cliente(
        id_cliente			int primary key auto_increment,
        nm_cliente			varchar(200) not null,
        ds_email			varchar(200) not null,
        ds_senha			varchar(200) not null,
        dt_nascimento		date not null,
        ds_telefone			varchar(100) not null
    );
    select * from tb_cliente;

    select nm_cliente as nome, ds_email as email, dt_nascimento as nasc, ds_telefone as telefone from tb_cliente;
    select nm_cliente as nome, ds_email as email, dt_nascimento as nasc, ds_telefone as telefone from tb_cliente;

    select nm_cliente as nome, ds_email as email, dt_nascimento as nasc, ds_telefone as telefone from tb_cliente where nm_cliente like "%Ana%";

    insert into tb_cliente (nm_cliente, ds_email, ds_senha, dt_nascimento, ds_telefone)
    values (?, ?, ?, ?, ?);

    create table tb_endereco(
        id_endereco			int primary key auto_increment,
        nm_destinatario		varchar(200) not null,
        ds_cep				varchar(100) not null,
        ds_endereco			varchar(500) not null,
        ds_bairro			varchar(200) not null,
        ds_cidade			varchar(200) not null,
        ds_estado			varchar(200) not null,
        nr_endereco			int not null,
        ds_complemento		varchar(200)
    );
    drop table tb_endereco;
    select * from tb_endereco;
    insert into tb_endereco (nm_destinatario, ds_cep, ds_endereco, ds_bairro, ds_cidade, ds_estado, nr_endereco, ds_complemento)
        values ("Exemplo", "12345-567", "Rua de exemplo", "Bairro de exemplo", "São Paulo", "São Paulo", 1000, "Casa de exemplo");