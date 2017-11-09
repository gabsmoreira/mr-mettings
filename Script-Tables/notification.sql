CREATE TABLE notification(
    id int not null;
    title varchar(100) not null; --Para mostrar o historico de notificacoes
    status boolean not null;
    id_group int(10)
    FOREIGN KEY (id_group) REFERENCES group(id),
    FOREIGN KEY (title) REFERENCES group(title), --o titulo do historico eh o nome do grupo, para poder automatizar
    PRIMARY KEY (id)
)
