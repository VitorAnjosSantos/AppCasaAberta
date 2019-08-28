create database CasaAberta;
use CasaAberta;

create table tb_usuario (
	id int auto_increment,
	nome varchar(60) not null,
	email varchar(255) not null,
	senha varchar(100) not null,
	primary key (id)
);

insert into tb_usuario values (null, 'João da Esquina', 'a@b.com.br', '123');

select * from tb_usuario;