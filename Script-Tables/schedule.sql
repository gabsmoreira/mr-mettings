CREATE TABLE schedule (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    monday_6 boolean,
    monday_7 boolean,
    monday_8 boolean,
    monday_9 boolean,
    monday_10 boolean,
    monday_11 boolean,
    monday_12 boolean,
    monday_13 boolean,
    monday_14 boolean,
    monday_15 boolean,
    monday_16 boolean,
    monday_17 boolean,
    monday_18 boolean,
    monday_19 boolean,
    monday_20 boolean,
    monday_21 boolean,
    monday_22 boolean,
    monday_23 boolean,
    tuesday_6 boolean,
    tuesday_7 boolean,
    tuesday_8 boolean,
    tuesday_9 boolean,
    tuesday_10 boolean,
    tuesday_11 boolean,
    tuesday_12 boolean,
    tuesday_13 boolean,
    tuesday_14 boolean,
    tuesday_15 boolean,
    tuesday_16 boolean,
    tuesday_17 boolean,
    tuesday_18 boolean,
    tuesday_19 boolean,
    tuesday_20 boolean,
    tuesday_21 boolean,
    tuesday_22 boolean,
    tuesday_23 boolean,
    wednesday_6 boolean,
    wednesday_7 boolean,
    wednesday_8 boolean,
    wednesday_9 boolean,
    wednesday_10 boolean,
    wednesday_11 boolean,
    wednesday_12 boolean,
    wednesday_13 boolean,
    wednesday_14 boolean,
    wednesday_15 boolean,
    wednesday_16 boolean,
    wednesday_17 boolean,
    wednesday_18 boolean,
    wednesday_19 boolean,
    wednesday_20 boolean,
    wednesday_21 boolean,
    wednesday_22 boolean,
    wednesday_23 boolean,
    thursday_6 boolean,
    thursday_7 boolean,
    thursday_8 boolean,
    thursday_9 boolean,
    thursday_10 boolean,
    thursday_11 boolean,
    thursday_12 boolean,
    thursday_13 boolean,
    thursday_14 boolean,
    thursday_15 boolean,
    thursday_16 boolean,
    thursday_17 boolean,
    thursday_18 boolean,
    thursday_19 boolean,
    thursday_20 boolean,
    thursday_21 boolean,
    thursday_22 boolean,
    thursday_23 boolean,
    friday_6 boolean,
    friday_7 boolean,
    friday_8 boolean,
    friday_9 boolean,
    friday_10 boolean,
    friday_11 boolean,
    friday_12 boolean,
    friday_13 boolean,
    friday_14 boolean,
    friday_15 boolean,
    friday_16 boolean,
    friday_17 boolean,
    friday_18 boolean,
    friday_19 boolean,
    friday_20 boolean,
    friday_21 boolean,
    friday_22 boolean,
    friday_23 boolean,
    saturday_6 boolean,
    saturday_7 boolean,
    saturday_8 boolean,
    saturday_9 boolean,
    saturday_10 boolean,
    saturday_11 boolean,
    saturday_12 boolean,
    saturday_13 boolean,
    saturday_14 boolean,
    saturday_15 boolean,
    saturday_16 boolean,
    saturday_17 boolean,
    saturday_18 boolean,
    saturday_19 boolean,
    saturday_20 boolean,
    saturday_21 boolean,
    saturday_22 boolean,
    saturday_23 boolean,
    sunday_6 boolean,
    sunday_7 boolean,
    sunday_8 boolean,
    sunday_9 boolean,
    sunday_10 boolean,
    sunday_11 boolean,
    sunday_12 boolean,
    sunday_13 boolean,
    sunday_14 boolean,
    sunday_15 boolean,
    sunday_16 boolean,
    sunday_17 boolean,
    sunday_18 boolean,
    sunday_19 boolean,
    sunday_20 boolean,
    sunday_21 boolean,
    sunday_22 boolean,
    sunday_23 boolean,
    PRIMARY KEY (id)
    FOREIGN KEY (user_id) REFERENCES user(id)
);