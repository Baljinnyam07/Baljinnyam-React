CREATE TABLE
    category(
        id int unsigned NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        slug VARCHAR (255),
        imgUrl VARCHAR(200),
        productCount int UNSIGNED DEFAULT '0',
        createdAt datetime,
        PRIMARY KEY (id)
    );

CREATE TABLE
    product(
        id int unsigned NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        slug VARCHAR (255),
        imgUrl VARCHAR(200),
        productCount int UNSIGNED DEFAULT '0',
        createdAt datetime,
        PRIMARY KEY (id)
    );

-- TODOCATEGORY

CREATE TABLE
    todoCategory (
        id int unsigned NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        PRIMARY KEY (id)
    );

--TODO

CREATE TABLE
    todo (
        id int unsigned NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        isDone BOOLEAN DEFAULT false,
        todoCategoryId int UNSIGNED,
        PRIMARY KEY(id),
        FOREIGN KEY(todoCategoryId) REFERENCES todoCategory(id)
    );

INSERT INTO todoCategory VALUES(NULL,'Must do');

INSERT INTO todo values (NULL,'Brush teeth', false, 1);

-- 1.todoCategoryId ustgah

ALTER Table todo drop constraint todo_ibfk_1;

-- 2.

alter table
    todo drop todoCategoryId -- 1.todoCategoryId nemeh
ALTER TABLE todo
ADD
    COLUMN todoCategoryId INT unsigned;

-- 2.

ALTER TABLE doto
ADD
    FOREIGN KEY (todoCategoryId) REFERENCES todoCategory(id);