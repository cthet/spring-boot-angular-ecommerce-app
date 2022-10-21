
--------------------------------------------------------
--------------CATEGORIES--------------------------------
---------------------------------------------------------

INSERT INTO ecommerce.gender_category(id, gender_category_type) VALUES ('1', 'Men');
INSERT INTO ecommerce.gender_category(id, gender_category_type) VALUES ('2', 'Women');

--Apparel Categories--
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('1', 'Manteaux');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('2', 'Blousons');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('3', 'Maille');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('4', 'Sweatshirts');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('5', 'T-shirts');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('6', 'Denim');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('7', 'Pantalons');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('8', 'Shorts');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('9', 'Chemises');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('10', 'Polos');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('11', 'Vestes');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('12', 'Activewear');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('13', 'Tops');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('14', 'Robes');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('15', 'Jupes');

--Brands Category--
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('1', 'Alexander McQueen');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('2', 'AMI Paris');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('3', 'Balenciaga');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('4', 'Balmain');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('5', 'Bottega Veneta');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('6', 'Burberry');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('7', 'Canada Goose');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('8', 'Céline');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('9', 'Chloé');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('10', 'Dior');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('11', 'Fendi');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('12', 'Loewe');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('13', 'Louis Vuitton');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('14', 'Max Mara');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('15', 'Moncler');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('16', 'Stone Island');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('17', 'Thom Browne');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('18', 'Tom Ford');
INSERT INTO ecommerce.brand_category(id, brand_category_type) VALUES ('19', 'Valentino');


--Brand Image Url per Gender--
--Men
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('1','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/amiparis.jpg', '2', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('2','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/balenciaga.jpg', '3', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('3','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/burberry.jpg', '6', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('4','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/canadagoose.jpg', '7', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('5','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/dior.jpg', '10', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('6','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/fendi.jpg', '11', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('7','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/loewe.jpg', '12', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('8','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/louisvuitton.jpg', '13', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('9','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/moncler.jpg', '15', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('10','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/stoneisland.jpg', '16', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('11','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/thombrowne.jpg', '17', '1');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('12','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/homme/tomford.jpg', '18', '1');
--Women
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('13','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/alexander-mcqueenjpg.jpg', '1', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('14','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/balenciaga.jpg', '3', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('15','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/balmain.jpg', '4', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('16','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/bottegaveneta.jpg', '5', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('17','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/burberry.jpg', '6', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('18','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/celine.jpg', '8', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('19','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/chloé.jpg', '9', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('20','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/dior.jpg', '10', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('21','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/fendi.jpg', '11', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('22','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/loewe.jpg', '12', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('23','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/louisvuitton.jpg', '13', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('24','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/maxmara.jpg', '14', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('25','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/moncler.jpg', '15', '2');
INSERT INTO ecommerce.brand_image(id, image_url, brand_category_id, gender_category_id) VALUES ('26','https://ecommerce-luxe-images.s3.eu-west-3.amazonaws.com/brandImages/femme/valentino.jpg', '19', '2');


--Brand Category per Gender--
--Men--
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('2','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('3','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('6','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('7','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('10','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('11','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('12','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('13','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('15','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('16','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('17','1');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('18','1');
--Women--
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('1','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('3','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('4','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('5','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('6','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('8','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('9','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('10','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('11','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('12','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('13','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('14','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('15','2');
INSERT INTO ecommerce.brand_category_gender(brand_category_id, gender_category_id) VALUES ('19','2');

--Apparel Category per Gender--
--Men--
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','1');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','2');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','3');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','4');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','5');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','6');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','7');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','8');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','9');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','10');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','11');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('1','12');

--Women
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','1');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','11');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','3');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','4');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','13');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','9');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','14');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','7');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','6');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','12');
INSERT INTO ecommerce.apparel_category_gender(gender_category_id, apparel_category_id) VALUES ('2','15');

--Apparel Category per Brand--
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '1');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '1');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '1');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '1');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '1');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '1');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '2');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('2', '2');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '2');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '2');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '2');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '3');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '3');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '4');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '4');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '5');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '5');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '5');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '5');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '5');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('10', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '6');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '6');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '7');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('2', '7');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '8');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '8');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '9');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '9');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '9');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '9');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '9');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '9');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '10');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '10');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('19', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('22', '11');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('18', '11');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('19', '12');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('22', '12');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('17', '12');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '12');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('18', '12');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '12');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('5', '12');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('2', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('6', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('9', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('10', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('11', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('12', '13');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('8', '13');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '14');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '14');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '14');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('13', '14');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('4', '14');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '15');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('16', '15');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '15');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('6', '15');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '15');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('22', '15');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('24', '15');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '16');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '16');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('16', '16');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('22', '16');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('24', '16');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '16');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('14', '17');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '17');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('16', '17');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('17', '17');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '17');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('22', '17');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('6', '17');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('24', '17');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '18');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('15', '18');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('16', '18');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('17', '18');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('6', '18');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('22', '18');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('24', '18');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '18');

INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('1', '19');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('3', '19');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('16', '19');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('6', '19');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('7', '19');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('22', '19');
INSERT INTO ecommerce.apparel_category_brand(apparel_category_id, brand_category_id) VALUES ('24', '19');



