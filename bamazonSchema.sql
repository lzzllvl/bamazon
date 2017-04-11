CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE departments(
  `department_id` INTEGER(11) UNSIGNED auto_increment NOT NULL,
  `department_name` VARCHAR(32) NOT NULL,
  `over_head_costs` DECIMAL(10,4) NOT NULL,
  `total_sales` DECIMAL(10,4) NOT NULL,
  PRIMARY KEY(`department_id`)
);

CREATE TABLE products(
  `item_id` INTEGER(11) UNSIGNED auto_increment NOT NULL,
  `product_name` VARCHAR(255) NOT NULL,
  `department_name` VARCHAR(32),
  `price` DECIMAL(10,4) NOT NULL,
  `stock_quantity` INTEGER(5) NOT NULL,
  `product_sales` DECIMAL(10,4) NOT NULL,
  PRIMARY KEY(`item_id`),
  FOREIGN KEY (`department_name`)
  REFERENCES departments(`department_name`)
);
