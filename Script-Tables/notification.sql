CREATE TABLE Notification(
    id INT NOT NULL AUTO_INCREMENT,
    note VARCHAR(100) NOT NULL,
    status BOOLEAN NOT NULL,
    id_team INT(10),
    FOREIGN KEY (id_team) REFERENCES Team(id),
    PRIMARY KEY (id)
);
