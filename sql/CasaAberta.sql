create database CasaAberta;
use CasaAberta;

create table tb_usuario (
	id int auto_increment,
	nome varchar(60) not null,
	email varchar(255) not null,
	senha varchar(100) not null,
	primary key (id)
);

-- insert into tb_usuario values (null, 'João da Esquina', 'a@b.com.br', '123');

select * from tb_usuario;

create table tb_evento (
	id int auto_increment,
    nome varchar(50) not null,
    descricao varchar(200) not null,
    data_evento datetime not null,
    local_evento varchar(50) not null,
    responsavel varchar(30) not null,
    primary key(id)
);

insert into tb_evento(nome, descricao, data_evento, local_evento, responsavel) 
values ('CASA ABERTA DIGITAL - O EVENTO NA PONTA DOS DEDOS', 'O participante poderá consultar o mapa interativo do evento projetado na tela da recepção da unidade Taboão da Serra, e identificar a localização das salas e o conteúdo das oficinas com um toque.', now(), '4º andar, sala 46', 'Tec Web Info 7');

select * from tb_evento;