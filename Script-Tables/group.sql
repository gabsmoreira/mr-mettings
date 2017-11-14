CREATE TABLE Group (
    id INT(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    id_user1 INT(10) NOT NULL,
    id_user2 INT(10) NOT NULL,
    id_user3 INT(10),
    id_user4 INT(10),
    id_user5 INT(10),
    id_user6 INT(10),   
    id_user7 INT(10),
    id_user8 INT(10),
    id_user9 INT(10),
    id_user10 INT(10),
    PRIMARY KEY (id),
    FOREIGN KEY (id_user1) REFERENCES User(id),
    FOREIGN KEY (id_user2) REFERENCES User(id),
    FOREIGN KEY (id_user3) REFERENCES User(id),
    FOREIGN KEY (id_user4) REFERENCES User(id),
    FOREIGN KEY (id_user5) REFERENCES User(id),
    FOREIGN KEY (id_user6) REFERENCES User(id),
    FOREIGN KEY (id_user7) REFERENCES User(id),
    FOREIGN KEY (id_user8) REFERENCES User(id),
    FOREIGN KEY (id_user9) REFERENCES User(id),
    FOREIGN KEY (id_user10) REFERENCES User(id)
    
);

