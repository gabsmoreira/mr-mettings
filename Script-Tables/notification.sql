CREATE TABLE Notification(
    id int not null,
    note varchar(100) not null,
    status boolean not null,
    id_team int(10),
    FOREIGN KEY (id_team) REFERENCES Team(id),
    PRIMARY KEY (id)
);
