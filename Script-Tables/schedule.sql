CREATE TABLE Schedule (
    id INT NOT NULL AUTO_INCREMENT,
    id_user INT NOT NULL,
    monday_6 BOOLEAN,
    monday_7 BOOLEAN,
    monday_8 BOOLEAN,
    monday_9 BOOLEAN,
    monday_10 BOOLEAN,
    monday_11 BOOLEAN,
    monday_12 BOOLEAN,
    monday_13 BOOLEAN,
    monday_14 BOOLEAN,
    monday_15 BOOLEAN,
    monday_16 BOOLEAN,
    monday_17 BOOLEAN,
    monday_18 BOOLEAN,
    monday_19 BOOLEAN,
    monday_20 BOOLEAN,
    monday_21 BOOLEAN,
    monday_22 BOOLEAN,
    monday_23 BOOLEAN,
    tuesday_6 BOOLEAN,
    tuesday_7 BOOLEAN,
    tuesday_8 BOOLEAN,
    tuesday_9 BOOLEAN,
    tuesday_10 BOOLEAN,
    tuesday_11 BOOLEAN,
    tuesday_12 BOOLEAN,
    tuesday_13 BOOLEAN,
    tuesday_14 BOOLEAN,
    tuesday_15 BOOLEAN,
    tuesday_16 BOOLEAN,
    tuesday_17 BOOLEAN,
    tuesday_18 BOOLEAN,
    tuesday_19 BOOLEAN,
    tuesday_20 BOOLEAN,
    tuesday_21 BOOLEAN,
    tuesday_22 BOOLEAN,
    tuesday_23 BOOLEAN,
    wednesday_6 BOOLEAN,
    wednesday_7 BOOLEAN,
    wednesday_8 BOOLEAN,
    wednesday_9 BOOLEAN,
    wednesday_10 BOOLEAN,
    wednesday_11 BOOLEAN,
    wednesday_12 BOOLEAN,
    wednesday_13 BOOLEAN,
    wednesday_14 BOOLEAN,
    wednesday_15 BOOLEAN,
    wednesday_16 BOOLEAN,
    wednesday_17 BOOLEAN,
    wednesday_18 BOOLEAN,
    wednesday_19 BOOLEAN,
    wednesday_20 BOOLEAN,
    wednesday_21 BOOLEAN,
    wednesday_22 BOOLEAN,
    wednesday_23 BOOLEAN,
    thursday_6 BOOLEAN,
    thursday_7 BOOLEAN,
    thursday_8 BOOLEAN,
    thursday_9 BOOLEAN,
    thursday_10 BOOLEAN,
    thursday_11 BOOLEAN,
    thursday_12 BOOLEAN,
    thursday_13 BOOLEAN,
    thursday_14 BOOLEAN,
    thursday_15 BOOLEAN,
    thursday_16 BOOLEAN,
    thursday_17 BOOLEAN,
    thursday_18 BOOLEAN,
    thursday_19 BOOLEAN,
    thursday_20 BOOLEAN,
    thursday_21 BOOLEAN,
    thursday_22 BOOLEAN,
    thursday_23 BOOLEAN,
    friday_6 BOOLEAN,
    friday_7 BOOLEAN,
    friday_8 BOOLEAN,
    friday_9 BOOLEAN,
    friday_10 BOOLEAN,
    friday_11 BOOLEAN,
    friday_12 BOOLEAN,
    friday_13 BOOLEAN,
    friday_14 BOOLEAN,
    friday_15 BOOLEAN,
    friday_16 BOOLEAN,
    friday_17 BOOLEAN,
    friday_18 BOOLEAN,
    friday_19 BOOLEAN,
    friday_20 BOOLEAN,
    friday_21 BOOLEAN,
    friday_22 BOOLEAN,
    friday_23 BOOLEAN,
    saturday_6 BOOLEAN,
    saturday_7 BOOLEAN,
    saturday_8 BOOLEAN,
    saturday_9 BOOLEAN,
    saturday_10 BOOLEAN,
    saturday_11 BOOLEAN,
    saturday_12 BOOLEAN,
    saturday_13 BOOLEAN,
    saturday_14 BOOLEAN,
    saturday_15 BOOLEAN,
    saturday_16 BOOLEAN,
    saturday_17 BOOLEAN,
    saturday_18 BOOLEAN,
    saturday_19 BOOLEAN,
    saturday_20 BOOLEAN,
    saturday_21 BOOLEAN,
    saturday_22 BOOLEAN,
    saturday_23 BOOLEAN,
    sunday_6 BOOLEAN,
    sunday_7 BOOLEAN,
    sunday_8 BOOLEAN,
    sunday_9 BOOLEAN,
    sunday_10 BOOLEAN,
    sunday_11 BOOLEAN,
    sunday_12 BOOLEAN,
    sunday_13 BOOLEAN,
    sunday_14 BOOLEAN,
    sunday_15 BOOLEAN,
    sunday_16 BOOLEAN,
    sunday_17 BOOLEAN,
    sunday_18 BOOLEAN,
    sunday_19 BOOLEAN,
    sunday_20 BOOLEAN,
    sunday_21 BOOLEAN,
    sunday_22 BOOLEAN,
    sunday_23 BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES User(id)
);