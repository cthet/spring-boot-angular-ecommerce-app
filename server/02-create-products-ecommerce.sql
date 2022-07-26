-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------
--  DROP SCHEMA IF EXISTS `ecommerce`;

--  CREATE SCHEMA `ecommerce`;
USE `ecommerce` ;

-- -- -- -----------------------------------------------------
-- -- Table `ecommerce`.`gender_category`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `ecommerce`.`gender_category` (
--   `id` INT(20) NOT NULL AUTO_INCREMENT,
--   `gender_category_type` VARCHAR(255) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`))
-- ENGINE=InnoDB
-- AUTO_INCREMENT = 1;

-- -- -- -----------------------------------------------------
-- -- -- Table `ecommerce`.`apparel_category`
-- -- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `ecommerce`.`apparel_category` (
--   `id` INT(20) NOT NULL AUTO_INCREMENT,
--   `apparel_category_type` VARCHAR(255) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`))
-- ENGINE=InnoDB
-- AUTO_INCREMENT = 1;

-- -- -- -----------------------------------------------------
-- -- -- Table `ecommerce`.`apparel_gender`
-- -- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `ecommerce`.`apparel_gender` (
--   `gender_category_id` INT(20) NOT NULL,
--   `apparel_category_id` INT(20) NOT NULL,
--   FOREIGN KEY (`gender_category_id`) REFERENCES gender_category(`id`),
--   FOREIGN KEY (`apparel_category_id`) REFERENCES apparel_category(`id`),
--   UNIQUE (`gender_category_id`, `apparel_category_id`))
--   ENGINE=InnoDB
-- AUTO_INCREMENT = 1;

-- -- -- -----------------------------------------------------
-- -- -- Table `ecommerce`.`price_range_category`
-- -- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `ecommerce`.`price_range_category` (
--   `id` INT(20) NOT NULL AUTO_INCREMENT,
--   `price_range_category_type` VARCHAR(255) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`))
-- ENGINE=InnoDB
-- AUTO_INCREMENT = 1;

-- -- -- -----------------------------------------------------
-- -- -- Table `ecommerce`.`product`
-- -- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `ecommerce`.`product` (
--   `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
--   `product_name` VARCHAR(255) DEFAULT NULL,
--   `unit_price` DECIMAL(13,2) DEFAULT NULL,
--   `image_url` VARCHAR(255) DEFAULT NULL,
--   `units_in_stock` INT(11) DEFAULT NULL,
--   `gender_category_id` INT(20) NOT NULL,
--   `apparel_category_id` INT(20) NOT NULL,
--   `price_range_category_id` INT(20) NOT NULL,
--   PRIMARY KEY (`id`),
--   FOREIGN KEY (`gender_category_id`) REFERENCES `gender_category` (`id`),
--   FOREIGN KEY (`apparel_category_id`) REFERENCES `apparel_category` (`id`),
--   FOREIGN KEY (`price_range_category_id`) REFERENCES `price_range_category` (`id`)
-- ) 
-- ENGINE=InnoDB
-- AUTO_INCREMENT = 1;


-- -- -----------------------------------------------------
-- -- COUNTRIES
-- -- -----------------------------------------------------
INSERT INTO country(id, code, name) VALUES ('1','FR','France'),('2','US','United State of America'),('3','GB','United Kingdom of Great Britain'),('4','BE','Belgium'),('5','IT','Italy'),('6','ES','Spain'),('7','DE','Germany');

-- -- -----------------------------------------------------
-- -- CATEGORIES
-- -- -----------------------------------------------------

INSERT INTO apparel_category(id, apparel_category_type) VALUES ('1','T-shirts'),('2','Jeans'),('3','Sweats'),('4','Suits'),('5','Tops'),('6','Dresses'),('7','Jackets'),('8','Skirts'),('9','Any');
INSERT INTO gender_category(id, gender_category_type) VALUES ('1','Men'),('2','Women');
INSERT INTO price_range_category(id, price_range_category_type) VALUES ('1','< 50€'), ('2','50€ - 100€'), ('3','100€-200€'),('4','>200€'), ('5','Any');
INSERT INTO apparel_gender(gender_category_id, apparel_category_id) VALUES ('1','1'),('1','2'),('1','3'),('1','4'),('1','9'),('2','5'),('2','6'),('2','7'),('2','8'),('2','9');


-- -- -----------------------------------------------------
-- -- Products
-- -- -----------------------------------------------------

-- -- -----------------------------------------------------
-- -- Men
-- -- -----------------------------------------------------

-- -- -----------------------------------------------------
-- -- Tshirts
-- -- -----------------------------------------------------apparel_genderapparel_genderproduct

INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_1', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_2', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_3', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_4', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_5', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_6', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_7', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_8', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_9', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_10', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_11', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Tshirt_12', '45', 'assets/images/apparels/men/tshirts/tshirt_1.jpg', '533','1','1','1');

-- -- -----------------------------------------------------
-- -- Jeansprice_range_category
-- -- -----------------------------------------------------
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_1', '80', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_2', '80', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_3', '100', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_4', '80', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_5', '80', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_6', '80', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_7', '80', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_8', '80', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_9', '80', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_10', '80', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_11', '80', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jeans_12', '80', 'assets/images/apparels/men/jeans/jeans_1.jpg', '320','1','2','2');


-- -- -----------------------------------------------------
-- -- Sweats
-- -- -----------------------------------------------------

INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_1', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_2', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_3', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_4', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_5', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_6', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_7', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_8', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_9', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_10', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_11', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_12', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Sweats_13', '60', 'assets/images/apparels/men/sweats/sweat_1', '533','1','3','2');

-- -- -----------------------------------------------------
-- -- Suits
-- -- -----------------------------------------------------

INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_1', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_2', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_3', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_4', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_5', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_6', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_7', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_8', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_9', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_10', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_11', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Suit_12', '60', 'assets/images/apparels/men/suits/suit_1', '136','1','4','3');

-- -- -- -----------------------------------------------productproductproduct------
-- -- -- Women
-- -- -- -----------------------------------------------------

-- -- -- -----------------------------------------------------
-- -- -- Tops
-- -- -- -----------------------------------------------------

INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_1', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_2', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_3', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_4', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_5', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_6', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_7', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_8', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_9', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_10', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_11', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Top_12', '25', 'assets/images/apparels/women/top/top_1', '536','2','5','1');

-- -- -- -----------------------------------------------------
-- -- -- Dresses
-- -- -- -----------------------------------------------------

INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_1', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_2', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_3', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_4', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_5', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_6', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_7', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_8', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_9', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_10', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_11', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Dress_12', '40', 'assets/images/apparels/women/dress/dress_1', '246','2','6','1');
-- -- -----------------------------------------------------
-- -- Jackets
-- -- -----------------------------------------------------

INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_1', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_2', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_3', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_4', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_5', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_6', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_7', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_8', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_9', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_10', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_11', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Jacket_12', '90', 'assets/images/apparels/women/jacket/jacket_1', '421','2','7','2');

-- -- -----------------------------------------------------
-- -- Skirts
-- -- -----------------------------------------------------

INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_1', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_2', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_3', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_4', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_5', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_6', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_7', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_8', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_9', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_10', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_11', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
INSERT INTO product (product_name, unit_price, image_url, units_in_stock, gender_category_id, apparel_category_id, price_range_category_id) VALUES ('Skirt_12', '35', 'assets/images/apparels/women/skirt/skirt_1', '246','2','8','1');
