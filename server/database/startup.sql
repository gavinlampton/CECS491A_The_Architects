-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2023-03-12 01:08:16.81
CREATE DATABASE IF NOT EXISTS customer_notifications;


-- tables
-- Table: category
CREATE TABLE IF NOT EXISTS category (
    name varchar(50)  NOT NULL,
    CONSTRAINT category_pk PRIMARY KEY (name)
);

-- Table: customer
CREATE TABLE IF NOT EXISTS customer (
    id int  NOT NULL AUTO_INCREMENT,
    full_name varchar(30)  NOT NULL,
    email varchar(30)  NOT NULL,
    phone varchar(11)  NOT NULL,
    enrollment_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    sale_notification bool  NOT NULL,
    stock_notification bool  NOT NULL,
    CONSTRAINT customer_pk PRIMARY KEY (id)
);

-- Table: login
CREATE TABLE IF NOT EXISTS login (
    username varchar(20)  NOT NULL,
    password varchar(64)  NOT NULL,
    role varchar(20)  NOT NULL,
    email varchar(20)  NOT NULL,
    CONSTRAINT login_pk PRIMARY KEY (username,password)
);

-- Table: preference
CREATE TABLE IF NOT EXISTS preference (
    customer_id int  NOT NULL,
    category varchar(50)  NOT NULL,
    CONSTRAINT preference_pk PRIMARY KEY (customer_id,category)
);

-- foreign keys
-- Reference: Preferences_Categories (table: preference)
ALTER TABLE preference ADD CONSTRAINT Preferences_Categories FOREIGN KEY Preferences_Categories (category)
    REFERENCES category (name);

-- Reference: Preferences_Customer (table: preference)
ALTER TABLE preference ADD CONSTRAINT Preferences_Customer FOREIGN KEY Preferences_Customer (customer_id)
    REFERENCES customer (id);

-- End of file.