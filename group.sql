CREATE TABLE group(
    id int(11) not null auto_increment,
    title varchar(50) not null,
    id_avaiable_schedule ,
    duration int(5) not null,
    participant,
    PRIMARY KEY (id)
    FOREIGN KEY (id_avaiable_schedule)
)

