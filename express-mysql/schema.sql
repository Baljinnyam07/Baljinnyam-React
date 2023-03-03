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