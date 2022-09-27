
--------------------------------------------------------
--------------CATEGORIES
---------------------------------------------------------

INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('1', 'T-shirts');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('2', 'Jeans');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('3', 'Sweats');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('4', 'Suits');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('5', 'Tops');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('6', 'Dresses');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('7', 'Jackets');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('8', 'Skirts');
INSERT INTO ecommerce.apparel_category(id, apparel_category_type) VALUES ('9', 'All Apparels');

INSERT INTO ecommerce.gender_category(id, gender_category_type) VALUES ('1', 'Men');
INSERT INTO ecommerce.gender_category(id, gender_category_type) VALUES ('2', 'Women');

INSERT INTO ecommerce.price_range_category(id, price_range_category_type) VALUES ('1', '< 50€');
INSERT INTO ecommerce.price_range_category(id, price_range_category_type) VALUES ('2', '50€ - 100€');
INSERT INTO ecommerce.price_range_category(id, price_range_category_type) VALUES ('3', '100€-200€');
INSERT INTO ecommerce.price_range_category(id, price_range_category_type) VALUES ('4', '>200€');
INSERT INTO ecommerce.price_range_category(id, price_range_category_type) VALUES ('5', 'All prices');



INSERT INTO ecommerce.apparel_gender(gender_category_id, apparel_category_id) VALUES ('1','1');
INSERT INTO ecommerce.apparel_gender(gender_category_id, apparel_category_id) VALUES ('1','2');
INSERT INTO ecommerce.apparel_gender(gender_category_id, apparel_category_id) VALUES ('1','3');
INSERT INTO ecommerce.apparel_gender(gender_category_id, apparel_category_id) VALUES ('1','4');
INSERT INTO ecommerce.apparel_gender(gender_category_id, apparel_category_id) VALUES ('1','9');
INSERT INTO ecommerce.apparel_gender(gender_category_id, apparel_category_id) VALUES ('2','5');
INSERT INTO ecommerce.apparel_gender(gender_category_id, apparel_category_id) VALUES ('2','6');
INSERT INTO ecommerce.apparel_gender(gender_category_id, apparel_category_id) VALUES ('2','7');
INSERT INTO ecommerce.apparel_gender(gender_category_id, apparel_category_id) VALUES ('2','8');
INSERT INTO ecommerce.apparel_gender(gender_category_id, apparel_category_id) VALUES ('2','9');
