CREATE TABLE Notification(
    id int not null;
    note varchar(100) not null; --Para mostrar o historico de notificacoes
    status boolean not null;
    id_group int(10)
    FOREIGN KEY (id_group) REFERENCES Group(id),
    PRIMARY KEY (id)
)
