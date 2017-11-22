CREATE DATABASE mrmeetings;

USE mrmeetings;


CREATE TABLE User (
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Schedule (
    id INT NOT NULL AUTO_INCREMENT,
    id_user INT NOT NULL,
    monday_6 BOOLEAN DEFAULT 1,
    monday_7 BOOLEAN DEFAULT 1,
    monday_8 BOOLEAN DEFAULT 1,
    monday_9 BOOLEAN DEFAULT 1,
    monday_10 BOOLEAN DEFAULT 1,
    monday_11 BOOLEAN DEFAULT 1,
    monday_12 BOOLEAN DEFAULT 1,
    monday_13 BOOLEAN DEFAULT 1,
    monday_14 BOOLEAN DEFAULT 1,
    monday_15 BOOLEAN DEFAULT 1,
    monday_16 BOOLEAN DEFAULT 1,
    monday_17 BOOLEAN DEFAULT 1,
    monday_18 BOOLEAN DEFAULT 1,
    monday_19 BOOLEAN DEFAULT 1,
    monday_20 BOOLEAN DEFAULT 1,
    monday_21 BOOLEAN DEFAULT 1,
    monday_22 BOOLEAN DEFAULT 1,
    monday_23 BOOLEAN DEFAULT 1,
    tuesday_6 BOOLEAN DEFAULT 1,
    tuesday_7 BOOLEAN DEFAULT 1,
    tuesday_8 BOOLEAN DEFAULT 1,
    tuesday_9 BOOLEAN DEFAULT 1,
    tuesday_10 BOOLEAN DEFAULT 1,
    tuesday_11 BOOLEAN DEFAULT 1,
    tuesday_12 BOOLEAN DEFAULT 1,
    tuesday_13 BOOLEAN DEFAULT 1,
    tuesday_14 BOOLEAN DEFAULT 1,
    tuesday_15 BOOLEAN DEFAULT 1,
    tuesday_16 BOOLEAN DEFAULT 1,
    tuesday_17 BOOLEAN DEFAULT 1,
    tuesday_18 BOOLEAN DEFAULT 1,
    tuesday_19 BOOLEAN DEFAULT 1,
    tuesday_20 BOOLEAN DEFAULT 1,
    tuesday_21 BOOLEAN DEFAULT 1,
    tuesday_22 BOOLEAN DEFAULT 1,
    tuesday_23 BOOLEAN DEFAULT 1,
    wednesday_6 BOOLEAN DEFAULT 1,
    wednesday_7 BOOLEAN DEFAULT 1,
    wednesday_8 BOOLEAN DEFAULT 1,
    wednesday_9 BOOLEAN DEFAULT 1,
    wednesday_10 BOOLEAN DEFAULT 1,
    wednesday_11 BOOLEAN DEFAULT 1,
    wednesday_12 BOOLEAN DEFAULT 1,
    wednesday_13 BOOLEAN DEFAULT 1,
    wednesday_14 BOOLEAN DEFAULT 1,
    wednesday_15 BOOLEAN DEFAULT 1,
    wednesday_16 BOOLEAN DEFAULT 1,
    wednesday_17 BOOLEAN DEFAULT 1,
    wednesday_18 BOOLEAN DEFAULT 1,
    wednesday_19 BOOLEAN DEFAULT 1,
    wednesday_20 BOOLEAN DEFAULT 1,
    wednesday_21 BOOLEAN DEFAULT 1,
    wednesday_22 BOOLEAN DEFAULT 1,
    wednesday_23 BOOLEAN DEFAULT 1,
    thursday_6 BOOLEAN DEFAULT 1,
    thursday_7 BOOLEAN DEFAULT 1,
    thursday_8 BOOLEAN DEFAULT 1,
    thursday_9 BOOLEAN DEFAULT 1,
    thursday_10 BOOLEAN DEFAULT 1,
    thursday_11 BOOLEAN DEFAULT 1,
    thursday_12 BOOLEAN DEFAULT 1,
    thursday_13 BOOLEAN DEFAULT 1,
    thursday_14 BOOLEAN DEFAULT 1,
    thursday_15 BOOLEAN DEFAULT 1,
    thursday_16 BOOLEAN DEFAULT 1,
    thursday_17 BOOLEAN DEFAULT 1,
    thursday_18 BOOLEAN DEFAULT 1,
    thursday_19 BOOLEAN DEFAULT 1,
    thursday_20 BOOLEAN DEFAULT 1,
    thursday_21 BOOLEAN DEFAULT 1,
    thursday_22 BOOLEAN DEFAULT 1,
    thursday_23 BOOLEAN DEFAULT 1,
    friday_6 BOOLEAN DEFAULT 1,
    friday_7 BOOLEAN DEFAULT 1,
    friday_8 BOOLEAN DEFAULT 1,
    friday_9 BOOLEAN DEFAULT 1,
    friday_10 BOOLEAN DEFAULT 1,
    friday_11 BOOLEAN DEFAULT 1,
    friday_12 BOOLEAN DEFAULT 1,
    friday_13 BOOLEAN DEFAULT 1,
    friday_14 BOOLEAN DEFAULT 1,
    friday_15 BOOLEAN DEFAULT 1,
    friday_16 BOOLEAN DEFAULT 1,
    friday_17 BOOLEAN DEFAULT 1,
    friday_18 BOOLEAN DEFAULT 1,
    friday_19 BOOLEAN DEFAULT 1,
    friday_20 BOOLEAN DEFAULT 1,
    friday_21 BOOLEAN DEFAULT 1,
    friday_22 BOOLEAN DEFAULT 1,
    friday_23 BOOLEAN DEFAULT 1,
    saturday_6 BOOLEAN DEFAULT 1,
    saturday_7 BOOLEAN DEFAULT 1,
    saturday_8 BOOLEAN DEFAULT 1,
    saturday_9 BOOLEAN DEFAULT 1,
    saturday_10 BOOLEAN DEFAULT 1,
    saturday_11 BOOLEAN DEFAULT 1,
    saturday_12 BOOLEAN DEFAULT 1,
    saturday_13 BOOLEAN DEFAULT 1,
    saturday_14 BOOLEAN DEFAULT 1,
    saturday_15 BOOLEAN DEFAULT 1,
    saturday_16 BOOLEAN DEFAULT 1,
    saturday_17 BOOLEAN DEFAULT 1,
    saturday_18 BOOLEAN DEFAULT 1,
    saturday_19 BOOLEAN DEFAULT 1,
    saturday_20 BOOLEAN DEFAULT 1,
    saturday_21 BOOLEAN DEFAULT 1,
    saturday_22 BOOLEAN DEFAULT 1,
    saturday_23 BOOLEAN DEFAULT 1,
    sunday_6 BOOLEAN DEFAULT 1,
    sunday_7 BOOLEAN DEFAULT 1,
    sunday_8 BOOLEAN DEFAULT 1,
    sunday_9 BOOLEAN DEFAULT 1,
    sunday_10 BOOLEAN DEFAULT 1,
    sunday_11 BOOLEAN DEFAULT 1,
    sunday_12 BOOLEAN DEFAULT 1,
    sunday_13 BOOLEAN DEFAULT 1,
    sunday_14 BOOLEAN DEFAULT 1,
    sunday_15 BOOLEAN DEFAULT 1,
    sunday_16 BOOLEAN DEFAULT 1,
    sunday_17 BOOLEAN DEFAULT 1,
    sunday_18 BOOLEAN DEFAULT 1,
    sunday_19 BOOLEAN DEFAULT 1,
    sunday_20 BOOLEAN DEFAULT 1,
    sunday_21 BOOLEAN DEFAULT 1,
    sunday_22 BOOLEAN DEFAULT 1,
    sunday_23 BOOLEAN DEFAULT 1,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES User(id)
);

CREATE TABLE Team (
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

CREATE TABLE Notification(
    id INT NOT NULL AUTO_INCREMENT,
    note VARCHAR(100) NOT NULL,
    status BOOLEAN NOT NULL,
    id_team INT(10),
    FOREIGN KEY (id_team) REFERENCES Team(id),
    PRIMARY KEY (id)
);

