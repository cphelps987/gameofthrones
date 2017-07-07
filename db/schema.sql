### Schema

CREATE DATABASE gameofthrones;

USE gameofthrones;

CREATE TABLE battles
(
	id int NOT NULL AUTO_INCREMENT,
	name VARCHAR (255) NOT NULL,
	location VARCHAR (255),
	attacker_king VARCHAR (255),
	defender_king VARCHAR (255),
	attacker_outcome VARCHAR (255),
	note BLOB,
	PRIMARY KEY (id)
);

CREATE TABLE deaths
(
	id int NOT NULL AUTO_INCREMENT,
	name VARCHAR (255) NOT NULL,
	allegiances VARCHAR (255)
);

CREATE TABLE predictions
(
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR (255) NOT NULL,
  isAlive INT (11)
);