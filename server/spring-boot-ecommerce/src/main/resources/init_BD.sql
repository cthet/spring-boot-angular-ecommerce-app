-- Table: ecommerce.address

-- DROP TABLE IF EXISTS ecommerce.address;

CREATE TABLE IF NOT EXISTS ecommerce.address
(
    id bigint NOT NULL,
    city character varying(255) COLLATE pg_catalog."default",
    country character varying(255) COLLATE pg_catalog."default",
    post_code integer NOT NULL,
    street character varying(255) COLLATE pg_catalog."default",
    order_id bigint,
    user_id bigint,
    CONSTRAINT address_pkey PRIMARY KEY (id),
    CONSTRAINT fkda8tuywtf0gb6sedwk7la1pgi FOREIGN KEY (user_id)
        REFERENCES ecommerce."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fknfn935dtm1w7m3n3vme55e9fj FOREIGN KEY (order_id)
        REFERENCES ecommerce.orders (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS ecommerce.address
    OWNER to postgres;

-- Table: ecommerce.apparel_category

-- DROP TABLE IF EXISTS ecommerce.apparel_category;

CREATE TABLE IF NOT EXISTS ecommerce.apparel_category
(
    id integer NOT NULL,
    apparel_category_type character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT apparel_category_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS ecommerce.apparel_category
    OWNER to postgres;

-- Table: ecommerce.apparel_gender

-- DROP TABLE IF EXISTS ecommerce.apparel_gender;

CREATE TABLE IF NOT EXISTS ecommerce.apparel_gender
(
    apparel_category_id integer NOT NULL,
    gender_category_id integer NOT NULL,
    CONSTRAINT apparel_gender_pkey PRIMARY KEY (apparel_category_id, gender_category_id),
    CONSTRAINT fk9laj5eibh06q5t6whabvlh6i FOREIGN KEY (gender_category_id)
        REFERENCES ecommerce.gender_category (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkbgsau1sd6tfsjwevcqxpdrxx7 FOREIGN KEY (apparel_category_id)
        REFERENCES ecommerce.apparel_category (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS ecommerce.apparel_gender
    OWNER to postgres;

-- Table: ecommerce.country

-- DROP TABLE IF EXISTS ecommerce.country;

CREATE TABLE IF NOT EXISTS ecommerce.country
(
    id integer NOT NULL,
    code character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT country_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS ecommerce.country
    OWNER to postgres;

-- Table: ecommerce.gender_category

-- DROP TABLE IF EXISTS ecommerce.gender_category;

CREATE TABLE IF NOT EXISTS ecommerce.gender_category
(
    id integer NOT NULL,
    gender_category_type character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT gender_category_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS ecommerce.gender_category
    OWNER to postgres;

-- Table: ecommerce.order_item

-- DROP TABLE IF EXISTS ecommerce.order_item;

CREATE TABLE IF NOT EXISTS ecommerce.order_item
(
    id bigint NOT NULL,
    amount bigint,
    quantity bigint,
    order_id bigint,
    product_id bigint,
    CONSTRAINT order_item_pkey PRIMARY KEY (id),
    CONSTRAINT fk551losx9j75ss5d6bfsqvijna FOREIGN KEY (product_id)
        REFERENCES ecommerce.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkt4dc2r9nbvbujrljv3e23iibt FOREIGN KEY (order_id)
        REFERENCES ecommerce.orders (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS ecommerce.order_item
    OWNER to postgres;

-- Table: ecommerce.orders

-- DROP TABLE IF EXISTS ecommerce.orders;

CREATE TABLE IF NOT EXISTS ecommerce.orders
(
    id bigint NOT NULL,
    date_created timestamp without time zone,
    first_name character varying(255) COLLATE pg_catalog."default",
    last_name character varying(255) COLLATE pg_catalog."default",
    last_updated timestamp without time zone,
    order_tracking_number character varying(255) COLLATE pg_catalog."default",
    total_price numeric(19,2),
    total_quantity integer,
    shipping_address_id bigint,
    user_id bigint,
    CONSTRAINT orders_pkey PRIMARY KEY (id),
    CONSTRAINT fkel9kyl84ego2otj2accfd8mr7 FOREIGN KEY (user_id)
        REFERENCES ecommerce."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkh0uue95ltjysfmkqb5abgk7tj FOREIGN KEY (shipping_address_id)
        REFERENCES ecommerce.address (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS ecommerce.orders
    OWNER to postgres;

-- Table: ecommerce.price_range_category

-- DROP TABLE IF EXISTS ecommerce.price_range_category;

CREATE TABLE IF NOT EXISTS ecommerce.price_range_category
(
    id integer NOT NULL,
    price_range_category_type character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT price_range_category_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS ecommerce.price_range_category
    OWNER to postgres;

-- Table: ecommerce.product

-- DROP TABLE IF EXISTS ecommerce.product;

CREATE TABLE IF NOT EXISTS ecommerce.product
(
    id bigint NOT NULL,
    image_url character varying(255) COLLATE pg_catalog."default",
    product_name character varying(255) COLLATE pg_catalog."default",
    unit_price numeric(19,2),
    units_in_stock integer,
    apparel_category_id integer,
    gender_category_id integer,
    price_range_category_id integer,
    CONSTRAINT product_pkey PRIMARY KEY (id),
    CONSTRAINT fkfjs7ppuylpmjj3iub2byr750m FOREIGN KEY (apparel_category_id)
        REFERENCES ecommerce.apparel_category (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkm62enl1v60125qbc984reb442 FOREIGN KEY (gender_category_id)
        REFERENCES ecommerce.gender_category (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkmed5a01k1cv6s5rwdy50rj99n FOREIGN KEY (price_range_category_id)
        REFERENCES ecommerce.price_range_category (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS ecommerce.product
    OWNER to postgres;

-- Table: ecommerce.user

-- DROP TABLE IF EXISTS ecommerce."user";

CREATE TABLE IF NOT EXISTS ecommerce."user"
(
    id bigint NOT NULL,
    email character varying(255) COLLATE pg_catalog."default",
    first_name character varying(255) COLLATE pg_catalog."default",
    last_name character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (id),
    CONSTRAINT uk_ob8kqyqqgmefl0aco34akdtpe UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS ecommerce."user"
    OWNER to postgres;

-- Table: ecommerce.user_role

-- DROP TABLE IF EXISTS ecommerce.user_role;

CREATE TABLE IF NOT EXISTS ecommerce.user_role
(
    user_id bigint NOT NULL,
    roles character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT fk859n2jvi8ivhui0rl0esws6o FOREIGN KEY (user_id)
        REFERENCES ecommerce."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS ecommerce.user_role
    OWNER to postgres;