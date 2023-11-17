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
    value ('Gustavo' ,'Gustavo@gmail.com', '1234');


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



insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
    values (1, 1, 'Iphone 13', 4499.00, 'Branco', 17, 'Apple iPhone 13 128GB. O sistema de câmera dupla mais avançado em um iPhone', 3559.00);
insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
        values (5, 2, 'Capinha Iphone 13', 99.00, 'Branco', 17, 'Apple Capinha iPhone 13. A capinha mais avançado em um iPhone', 59.00);
insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
        values (6, 2, 'Capinha Samsung A13', 89.00, 'Preto', 27, 'Android Capinha Samsung A13. A capinha mais avançado em um Samsung', 49.00);
insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
        values (5, 2, 'Capinha Iphone 11', 99.00, 'Douradp', 7, 'Apple Capinha iPhone 11. A capinha mais avançado em um iPhone', 59.00);
insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
    values (2, 1, 'Samsung A13', 1199.00, 'Preto', 47, 'Android Samsung A13 128GB. O sistema de câmera dupla mais avançado em um iPhone', 759.00);
insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
    values (2, 1, 'Samsung A33', 2199.00, 'Azul', 20, 'Android Samsung A33 128GB. O sistema de câmera dupla mais avançado em um iPhone', 1959.00);

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
    
    