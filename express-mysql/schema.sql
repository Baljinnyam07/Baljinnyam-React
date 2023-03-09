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

CREATE TABLE
    category(
        categoryId INT AUTO_INCREMENT name VARCHAR (255) NOT NULL slug VARCHAR (255) NOT NULL productCount INT DEFAULT 0 parent_id INT createdAt TIMESTAMP
    );

CREATE TABLE
    product (
        categoryId,
        productId INT AUTO_INCREMENT,
        categoryId INT,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL,
        shortDescription VARCHAR(1000),
        imageUrl VARCHAR(1000),
        text TEXT,
        price INT,
        discountPrice INT,
        remaining INT DEFAULT 0,
        readCount INT DEFAULT 0,
        rating DECIMAL(2, 1),
        created VARCHAR(255),
        createdAt TIMESTAMP,
        updated VARCHAR(255),
        updatedAt TIMESTAMP
    );

INSERT INTO `category` VALUES ('Shoes', 'shoes', '', 0,);

CREATE TABLE
    product (
        categoryId,
        productId INT AUTO_INCREMENT,
        categoryId INT,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL,
        shortDescription VARCHAR(1000),
        imageUrl VARCHAR(1000),
        text TEXT,
        price INT,
        discountPrice INT,
        remaining INT DEFAULT 0,
        readCount INT DEFAULT 0,
        rating DECIMAL(2, 1),
        created VARCHAR(255),
        createdAt TIMESTAMP,
        updated VARCHAR(255),
        updatedAt TIMESTAMP
    );