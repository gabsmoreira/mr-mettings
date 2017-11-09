CREATE TABLE User (
    user_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    id_schedule INT NOT NULL,
    id_notification INT NOT NULL,
    PRIMARY KEY (user_id)
);

