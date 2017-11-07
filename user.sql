CREATE TABLE User (
    user_id INT NOT NULL AUTO INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    id_schedule INT NOT NULL,
    id_notification INT NOT NULL,
    PRIMARY KEY (user_id),
    FOREIGN KEY (id_schedule) REFERENCES Schedule(schedule_id),
    FOREIGN KEY (id_notification) REFERENCES Notification(notification_id)
);

