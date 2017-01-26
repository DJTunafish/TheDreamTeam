/*
    Building the TODO list database 
    (assume nysql server is running


    $ mysql -u root -p          (login as root)

*/

USE astern;

CREATE TABLE Notes (
    id BIGINT NOT NULL AUTO_INCREMENT,
    text VARCHAR(256), 
    dateTime DATE NOT NULL,
    done BOOLEAN NOT NULL, 
    PRIMARY KEY (id)
);

INSERT INTO Notes (text, dateTime, done) VALUES ('Skala morot', '2017-04-11', false);
INSERT INTO Notes (text, dateTime, done) VALUES ('Jaga älg', '2018-04-12', false);
INSERT INTO Notes (text, dateTime, done) VALUES ('Rensa sallad', '2019-04-13', false);

ALTER TABLE Notes AUTO_INCREMENT = 100;

/*CREATE USER 'hajo'@'localhost' IDENTIFIED BY 'hajo';
GRANT ALL PRIVILEGES ON Notes TO 'hajo'@'localhost';
/* A check 
SHOW GRANTS FOR 'hajo'@'localhost';*/

/*
  Now it should be possible to log in as hajo
  $ mysql -u hajo -p     (password: hajo)

  Basic info:
  > show databases;
  > show grants;
  > use todo;


*/
