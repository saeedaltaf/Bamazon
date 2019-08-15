drop database if exists bamazon;

create database bamazon;

use bamazon;

create table products
(
    id int not null
    auto_increment,
    product_name varchar
    (100) not null,
    department_name VARCHAR
    (100),
    price int default 0,
    stock_quantity int default 0,
    primary key
    (id)
);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("adidas Men's Soccer Arsenal Home Jersey", "Sporting Goods", 81.99, 15);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Unsigned Luka Doncic Dallas Blue Custom Stitched Basketball Jersey Size Men's XL New No Brands/Logos", "Sporting Goods", 49, 30);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("2019 Lenovo ThinkPad X1 Carbon 14'", "Electronics", 1300.99, 10);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Jordan 1 Retro HIGH OG (TD) 'Spiderman'", "Shoes", 250.85, 5);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Porsche 911 GT3 RS 4.0 Blue 1/18 Diecast Car Model", "Toys", 150.00, 50);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("BMW S1000RR LED Front Turn Signals", "Automotive", 130.00, 100);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Leica MP 10301 35mm Rangefinder Camera", "Cameras", 4500.99, 5);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Kodak 35mm colour film - 36 exposures", "Cameras", 14.64, 1000);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("adidas Men's Soccer Manchester United Home Jersey", "Sporting Goods", 81.99, 24);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("adidas Men's Eqt Support Adv Sneakers", "Shoes", 60.00, 15);

    select *
    from products;

