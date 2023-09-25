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

create table tb_marca(
	id_marca	int primary key auto_increment,
    nm_marca	varchar(100) not null
);
select * from tb_marca;

create table tb_produto(
	id_produto 			int primary key auto_increment,
    id_marca			int,
    id_categoria		int,
    nm_modelo			varchar(200) not null,
    vl_preco			decimal(15,2) not null,
    ds_cor				varchar(200) not null,
    bt_disponivel		boolean not null,
    ds_produto			varchar(200) not null,
    vl_preco_promocao	decimal(15,2) not null,
    foreign key (id_marca) references tb_marca(id_marca),
    foreign key (id_categoria) references tb_categoria(id_categoria)
);
select * from tb_porduto;

create table tb_porduto_detalhe(
	id_produto_detalhe	int primary key auto_increment,
    id_produto			int not null,
    tp_detalhe			varchar(200) not null,
    ds_detalhe			varchar(500) not null, 
	foreign key (id_produto) references tb_produto(id_produto)
);
select * from tb_produto_detalhe;

create table tb_imagem(
	id_imagem		int primary key auto_increment,
    id_produto		int not null,
    ds_imagem		varchar(1000) not null,
    foreign key (id_produto) references tb_produto(id_produto)
);
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

insert into tb_cliente (nm_cliente, ds_email, ds_senha, dt_nascimento, ds_telefone)
values (?, ?, ?, ?, ?);