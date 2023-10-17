create database db_smart_seven;
use db_smart_seven;
drop database db_smart_seven;

create table tb_admin (
	id_admin 	int primary key auto_increment,
	ds_email 	varchar(200) not null,
	ds_senha 	varchar(200) not null
);
select * from tb_admin;

insert into tb_admin (ds_email, ds_senha)
value ('analuiza@gmail.com', '1234');


-- TABLE RED

create table tb_categoria(
	id_categoria	int primary key auto_increment,
    ds_categoria	varchar(200) not null
);
select * from tb_categoria;
drop table tb_categoria;
insert into tb_categoria (ds_categoria)
	 values ('Acessórios');

create table tb_marca(
	id_marca	int primary key auto_increment,
    nm_marca	varchar(100) not null
);
select * from tb_marca;
insert into tb_marca (nm_marca)
	 values ('Iphone');
insert into tb_marca (nm_marca)
	 values ('Samsung');

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
    foreign key (id_marca) references tb_marca(id_marca),
    foreign key (id_categoria) references tb_categoria(id_categoria)
);
select * from tb_produto;
drop table tb_produto;
delete from tb_produto where id_produto = ?;

select nm_produto as produto, vl_preco as preco, ds_categoria as categoria, nr_quantidade as qtd, id_produto as id 
  from tb_produto inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria;

insert into tb_produto (id_marca, id_categoria, nm_produto, vl_preco, ds_cor, nr_quantidade, ds_produto, vl_preco_promocao)
	 values (1, 1, 'Iphone 13', 4499.00, 'Branco', 17, 'Apple iPhone 13 128GB. O sistema de câmera dupla mais avançado em um iPhone', 3559.00);

	select nm_modelo as produto, vl_preco as preco, ds_categoria as categoria, bt_disponivel as disponibilidade 
	  from tb_produto 
inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria;

create table tb_produto_detalhe(
	id_produto_detalhe	int primary key auto_increment,
    id_produto			int not null,
    tp_detalhe			varchar(200) not null,
    ds_detalhe			varchar(500) not null, 
	foreign key (id_produto) references tb_produto(id_produto)
);
drop table tb_produto_detalhe;
select * from tb_produto_detalhe;

create table tb_imagem(
	id_imagem		int primary key auto_increment,
    id_produto		int not null,
    ds_imagem		varchar(1000) not null,
    foreign key (id_produto) references tb_produto(id_produto)
);
drop table tb_imagem;
select * from tb_imagem;

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
