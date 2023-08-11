CREATE DATABASE sipodb;

--TABLA DE USUARIOS--
CREATE TABLE
	users (
		fecha DATE NOT NULL DEFAULT CURRENT_DATE,
		user_id SERIAL PRIMARY KEY,
		nombre VARCHAR(50),
		apellidos VARCHAR(50),
		email VARCHAR(50) UNIQUE,
		password VARCHAR(250),
		image VARCHAR(250)
	);

INSERT INTO
	users (user_id, nombre, apellidos, email, password, image)
VALUES
	(
		DEFAULT,
		'Raul',
		'Low',
		'rlow@mail.com',
		'$2a$10$dRYOAKwA2K4SzX/uYwhaQOfRWuuT6zajQnZfuIoFE3BWWN4hiIj1W',
		'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	);

INSERT INTO
	users (user_id, nombre, apellidos, email, password, image)
VALUES
	(
		DEFAULT,
		'Ariel',
		'Sandoval',
		'asandoval@mail.com',
		'$2a$10$7SU1IIV6ppZ1sXvOF7To5OBsYMaG84sgU/UXG6GUg90E2a4SibioO',
		'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	);

INSERT INTO
	users (user_id, nombre, apellidos, email, password, image)
VALUES
	(
		DEFAULT,
		'Sofia',
		'Pickrill',
		'spickrill0@statcounter.com',
		'$2a$10$6LSdCSxRGdGGty98uxk2LemMhaNs32/AIILU2TADLp9yuA1OeRrEO',
		'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	);

INSERT INTO
	users (user_id, nombre, apellidos, email, password, image)
VALUES
	(
		DEFAULT,
		'Katti',
		'Scally',
		'kscally1@hp.com',
		'$2a$10$EWUBzQ8hJXZc7tow0qZVu.lsMRd0g5ZfcA7gUvZQjF1ZUT9t50.ia',
		'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	);

INSERT INTO
	users (user_id, nombre, apellidos, email, password, image)
VALUES
	(
		DEFAULT,
		'Killie',
		'Maxsted',
		'kmaxsted2@pinterest.com',
		'$2a$10$T/ZrDQwI79jLY6En0jjUZe1tcRCCP0ZOShWdAtGj6w4kJp3PNwokm',
		'https://images.pexels.com/photos/6652959/pexels-photo-6652959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	);

INSERT INTO
	users (user_id, nombre, apellidos, email, password, image)
VALUES
	(
		DEFAULT,
		'Jameson',
		'Bennell',
		'jbennell5@netvibes.com',
		'$2a$10$3ltH9iU1GVWKZJ0ILi1jx.xYAxe7eOIUg2M3JlG3mHmlhHXQx6zrG',
		'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	);

--TABLA DE PRODUCTOS--
CREATE TABLE
	products (
		product_id SERIAL PRIMARY KEY,
		titulo VARCHAR(50),
		categoria VARCHAR(50),
		region VARCHAR(50),
		descripcion VARCHAR(500),
		precio INT,
		image VARCHAR(250),
		vendido BOOLEAN,
		user_id INT,
		CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Paper Towel Touchless',
		'tecnologia',
		'biobio',
		'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
		379365,
		'https://picsum.photos/id/1/300/200',
		FALSE,
		3
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Chocolate - Dark Callets',
		'hogar',
		'valparaiso',
		'Integer ac neque.',
		381017,
		'https://picsum.photos/id/2/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Onions - Cippolini',
		'deportes',
		'coquimbo',
		'Morbi non lectus.',
		323607,
		'https://picsum.photos/id/3/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Kohlrabi',
		'libros',
		'nuble',
		'Praesent id massa id nisl venenatis lacinia.',
		375529,
		'https://picsum.photos/id/4/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Onions - Cooking',
		'mascotas',
		'valparaiso',
		'Duis ac nibh.',
		221729,
		'https://picsum.photos/id/5/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Wine - Cousino Macul Antiguas',
		'automotriz',
		'metropolitana',
		'Aenean lectus.',
		180362,
		'https://picsum.photos/id/6/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Soup - Campbells',
		'juguetes',
		'nuble',
		'Nunc purus.',
		39800,
		'https://picsum.photos/id/7/300/200',
		FALSE,
		3
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Flour - Corn, Fine',
		'tecnologia',
		'losrios',
		'Suspendisse accumsan tortor quis turpis.',
		129633,
		'https://picsum.photos/id/8/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Muffin - Blueberry Individual',
		'hogar',
		'loslagos',
		'Fusce posuere felis sed lacus.',
		412705,
		'https://picsum.photos/id/9/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Venison - Racks Frenched',
		'deportes',
		'antofagasta',
		'Nulla ac enim.',
		417285,
		'https://picsum.photos/id/10/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Lobster - Canned Premium',
		'libros',
		'arica',
		'Curabitur gravida nisi at nibh.',
		356506,
		'https://picsum.photos/id/11/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'External Supplier',
		'mascotas',
		'ohiggins',
		'Morbi non quam nec dui luctus rutrum.',
		209588,
		'https://picsum.photos/id/12/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Muffin - Carrot Individual Wrap',
		'automotriz',
		'loslagos',
		'Curabitur gravida nisi at nibh.',
		245671,
		'https://picsum.photos/id/13/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Kirsch - Schloss',
		'juguetes',
		'loslagos',
		'Curabitur gravida nisi at nibh.',
		183034,
		'https://picsum.photos/id/14/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Hot Choc Vending',
		'tecnologia',
		'losrios',
		'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
		345477,
		'https://picsum.photos/id/15/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Plastic Wrap',
		'hogar',
		'magallanes',
		'Maecenas tincidunt lacus at velit.',
		135623,
		'https://picsum.photos/id/16/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Parsley - Fresh',
		'deportes',
		'maule',
		'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
		47780,
		'https://picsum.photos/id/17/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Sugar - Palm',
		'libros',
		'maule',
		'In hac habitasse platea dictumst.',
		205283,
		'https://picsum.photos/id/18/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Lotus Root',
		'mascotas',
		'coquimbo',
		'Cras in purus eu magna vulputate luctus.',
		28937,
		'https://picsum.photos/id/19/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Flower - Potmums',
		'automotriz',
		'araucania',
		'Proin at turpis a pede posuere nonummy.',
		409778,
		'https://picsum.photos/id/20/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Garlic - Elephant',
		'juguetes',
		'atacama',
		'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
		434123,
		'https://picsum.photos/id/21/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Chicken - Whole',
		'tecnologia',
		'araucania',
		'In blandit ultrices enim.',
		122116,
		'https://picsum.photos/id/22/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Cabbage - Green',
		'hogar',
		'nuble',
		'In sagittis dui vel nisl.',
		478174,
		'https://picsum.photos/id/23/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Wine - Casillero Deldiablo',
		'deportes',
		'maule',
		'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
		305656,
		'https://picsum.photos/id/24/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Muffin - Bran Ind Wrpd',
		'libros',
		'ohiggins',
		'Mauris ullamcorper purus sit amet nulla.',
		490647,
		'https://picsum.photos/id/25/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Couscous',
		'mascotas',
		'araucania',
		'Nulla tellus.',
		87991,
		'https://picsum.photos/id/26/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Muffin Chocolate Individual Wrap',
		'automotriz',
		'ohiggins',
		'Curabitur at ipsum ac tellus semper interdum.',
		392929,
		'https://picsum.photos/id/27/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Tomatoes - Vine Ripe, Red',
		'juguetes',
		'aysen',
		'Mauris lacinia sapien quis libero.',
		242670,
		'https://picsum.photos/id/28/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Calvados - Boulard',
		'tecnologia',
		'aysen',
		'Ut tellus.',
		355168,
		'https://picsum.photos/id/29/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Beef - Top Butt Aaa',
		'hogar',
		'magallanes',
		'Proin risus.',
		34103,
		'https://picsum.photos/id/30/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Drambuie',
		'deportes',
		'valparaiso',
		'Fusce consequat.',
		306469,
		'https://picsum.photos/id/31/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Lemon Grass',
		'libros',
		'maule',
		'Nulla tempus.',
		341866,
		'https://picsum.photos/id/32/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Paste - Black Olive',
		'mascotas',
		'magallanes',
		'Maecenas rhoncus aliquam lacus.',
		98429,
		'https://picsum.photos/id/33/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Bread - 10 Grain Parisian',
		'automotriz',
		'aysen',
		'Pellentesque viverra pede ac diam.',
		27764,
		'https://picsum.photos/id/34/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Marsala - Sperone, Fine, D.o.c.',
		'juguetes',
		'antofagasta',
		'Morbi quis tortor id nulla ultrices aliquet.',
		417157,
		'https://picsum.photos/id/35/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Bread Sour Rolls',
		'tecnologia',
		'metropolitana',
		'Maecenas ut massa quis augue luctus tincidunt.',
		410350,
		'https://picsum.photos/id/36/300/200',
		FALSE,
		3
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'The Pop Shoppe - Black Cherry',
		'hogar',
		'ohiggins',
		'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
		131335,
		'https://picsum.photos/id/37/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Sherbet - Raspberry',
		'deportes',
		'valparaiso',
		'Aliquam erat volutpat.',
		253914,
		'https://picsum.photos/id/38/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Appetizer - Southwestern',
		'libros',
		'arica',
		'Ut at dolor quis odio consequat varius.',
		485286,
		'https://picsum.photos/id/39/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Cabbage - Nappa',
		'mascotas',
		'atacama',
		'Vivamus in felis eu sapien cursus vestibulum.',
		71657,
		'https://picsum.photos/id/40/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Gelatine Powder',
		'automotriz',
		'aysen',
		'Maecenas rhoncus aliquam lacus.',
		250330,
		'https://picsum.photos/id/41/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Sauce Tomato Pouch',
		'juguetes',
		'valparaiso',
		'Morbi vel lectus in quam fringilla rhoncus.',
		190345,
		'https://picsum.photos/id/42/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Cheese - Brick With Pepper',
		'tecnologia',
		'metropolitana',
		'Curabitur at ipsum ac tellus semper interdum.',
		285246,
		'https://picsum.photos/id/43/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Beef - Shank',
		'hogar',
		'loslagos',
		'Nulla tempus.',
		398464,
		'https://picsum.photos/id/44/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'General Purpose Trigger',
		'deportes',
		'aysen',
		'Nulla nisl.',
		468675,
		'https://picsum.photos/id/45/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Wine - Red, Pelee Island Merlot',
		'libros',
		'ohiggins',
		'Curabitur gravida nisi at nibh.',
		497663,
		'https://picsum.photos/id/46/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Liners - Banana, Paper',
		'mascotas',
		'tarapaca',
		'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
		342445,
		'https://picsum.photos/id/47/300/200',
		FALSE,
		3
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Beer - Labatt Blue',
		'automotriz',
		'antofagasta',
		'Nulla ac enim.',
		83594,
		'https://picsum.photos/id/48/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Pasta - Rotini, Dry',
		'juguetes',
		'aysen',
		'In sagittis dui vel nisl.',
		409708,
		'https://picsum.photos/id/49/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Cake - Night And Day Choclate',
		'tecnologia',
		'antofagasta',
		'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
		276046,
		'https://picsum.photos/id/50/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Cheese - Cheddar, Mild',
		'hogar',
		'coquimbo',
		'Praesent lectus.',
		443658,
		'https://picsum.photos/id/51/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Skirt - 29 Foot',
		'deportes',
		'loslagos',
		'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
		181308,
		'https://picsum.photos/id/52/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Pork - Back Ribs',
		'libros',
		'loslagos',
		'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
		472066,
		'https://picsum.photos/id/53/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Cheese - Goat With Herbs',
		'mascotas',
		'loslagos',
		'Nunc rhoncus dui vel sem.',
		136783,
		'https://picsum.photos/id/54/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Ostrich - Prime Cut',
		'automotriz',
		'ohiggins',
		'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
		471553,
		'https://picsum.photos/id/55/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Spoon - Soup, Plastic',
		'juguetes',
		'nuble',
		'Donec ut mauris eget massa tempor convallis.',
		36108,
		'https://picsum.photos/id/56/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Lid - 3oz Med Rec',
		'tecnologia',
		'loslagos',
		'Mauris ullamcorper purus sit amet nulla.',
		146750,
		'https://picsum.photos/id/57/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Oil - Canola',
		'hogar',
		'tarapaca',
		'Vivamus vestibulum sagittis sapien.',
		395295,
		'https://picsum.photos/id/58/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Cheese - Ricotta',
		'deportes',
		'arica',
		'Aliquam sit amet diam in magna bibendum imperdiet.',
		455447,
		'https://picsum.photos/id/59/300/200',
		FALSE,
		3
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Cumin - Ground',
		'libros',
		'tarapaca',
		'Proin at turpis a pede posuere nonummy.',
		499733,
		'https://picsum.photos/id/60/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Puree - Raspberry',
		'mascotas',
		'antofagasta',
		'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
		57853,
		'https://picsum.photos/id/61/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Cookies - Englishbay Chochip',
		'automotriz',
		'aysen',
		'Proin eu mi.',
		430144,
		'https://picsum.photos/id/62/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Tofu - Soft',
		'juguetes',
		'atacama',
		'Mauris ullamcorper purus sit amet nulla.',
		137651,
		'https://picsum.photos/id/63/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Oil - Avocado',
		'tecnologia',
		'ohiggins',
		'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
		37421,
		'https://picsum.photos/id/64/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Soup Campbells - Italian Wedding',
		'hogar',
		'ohiggins',
		'In hac habitasse platea dictumst.',
		420835,
		'https://picsum.photos/id/65/300/200',
		FALSE,
		3
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Pasta - Lasagna, Dry',
		'deportes',
		'nuble',
		'Proin eu mi.',
		494805,
		'https://picsum.photos/id/66/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Ginsing - Fresh',
		'libros',
		'antofagasta',
		'Aenean sit amet justo.',
		494634,
		'https://picsum.photos/id/67/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Almonds Ground Blanched',
		'mascotas',
		'valparaiso',
		'Nulla tempus.',
		440939,
		'https://picsum.photos/id/68/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Syrup - Chocolate',
		'automotriz',
		'tarapaca',
		'In eleifend quam a odio.',
		300987,
		'https://picsum.photos/id/69/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Anisette - Mcguiness',
		'juguetes',
		'metropolitana',
		'Nulla ut erat id mauris vulputate elementum.',
		161685,
		'https://picsum.photos/id/70/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Vinegar - White',
		'tecnologia',
		'loslagos',
		'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
		289093,
		'https://picsum.photos/id/71/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Oil - Pumpkinseed',
		'hogar',
		'nuble',
		'Nam dui.',
		479679,
		'https://picsum.photos/id/72/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Bread - Crusty Italian Poly',
		'deportes',
		'aysen',
		'Etiam vel augue.',
		406047,
		'https://picsum.photos/id/73/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Lobster - Canned Premium',
		'libros',
		'aysen',
		'Curabitur convallis.',
		369043,
		'https://picsum.photos/id/74/300/200',
		FALSE,
		3
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Cheese - Stilton',
		'mascotas',
		'biobio',
		'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
		120220,
		'https://picsum.photos/id/75/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Sea Bass - Whole',
		'automotriz',
		'nuble',
		'Vivamus in felis eu sapien cursus vestibulum.',
		147494,
		'https://picsum.photos/id/76/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Dikon',
		'juguetes',
		'nuble',
		'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
		40887,
		'https://picsum.photos/id/77/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Soup - Knorr, French Onion',
		'tecnologia',
		'valparaiso',
		'Aliquam erat volutpat.',
		80859,
		'https://picsum.photos/id/78/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Pail With Metal Handle 16l White',
		'hogar',
		'biobio',
		'Vivamus tortor.',
		52116,
		'https://picsum.photos/id/79/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Mousse - Banana Chocolate',
		'deportes',
		'atacama',
		'Suspendisse accumsan tortor quis turpis.',
		480522,
		'https://picsum.photos/id/80/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Bread - Pullman, Sliced',
		'libros',
		'atacama',
		'Maecenas rhoncus aliquam lacus.',
		474503,
		'https://picsum.photos/id/81/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Pastry - Mini French Pastries',
		'mascotas',
		'tarapaca',
		'Cras non velit nec nisi vulputate nonummy.',
		477966,
		'https://picsum.photos/id/82/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Pasta - Linguini, Dry',
		'automotriz',
		'atacama',
		'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
		159673,
		'https://picsum.photos/id/83/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Sping Loaded Cup Dispenser',
		'juguetes',
		'biobio',
		'Aliquam sit amet diam in magna bibendum imperdiet.',
		347514,
		'https://picsum.photos/id/84/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Bar Mix - Pina Colada, 355 Ml',
		'tecnologia',
		'aysen',
		'Aliquam erat volutpat.',
		395217,
		'https://picsum.photos/id/85/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Beans - Kidney, Red Dry',
		'hogar',
		'metropolitana',
		'Nullam porttitor lacus at turpis.',
		135993,
		'https://picsum.photos/id/87/300/200',
		FALSE,
		3
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Kohlrabi',
		'deportes',
		'metropolitana',
		'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
		495196,
		'https://picsum.photos/id/88/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Tea - Earl Grey',
		'libros',
		'tarapaca',
		'Vivamus tortor.',
		494193,
		'https://picsum.photos/id/89/300/200',
		FALSE,
		1
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Crab - Meat Combo',
		'mascotas',
		'ohiggins',
		'Vestibulum rutrum rutrum neque.',
		445448,
		'https://picsum.photos/id/90/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Cauliflower',
		'automotriz',
		'valparaiso',
		'Proin at turpis a pede posuere nonummy.',
		74775,
		'https://picsum.photos/id/91/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Isomalt',
		'juguetes',
		'valparaiso',
		'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
		353456,
		'https://picsum.photos/id/92/300/200',
		FALSE,
		4
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Oneshot Automatic Soap System',
		'tecnologia',
		'coquimbo',
		'Quisque ut erat.',
		298625,
		'https://picsum.photos/id/93/300/200',
		FALSE,
		3
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Marsala - Sperone, Fine, D.o.c.',
		'hogar',
		'valparaiso',
		'Proin interdum mauris non ligula pellentesque ultrices.',
		39639,
		'https://picsum.photos/id/94/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Squid - U - 10 Thailand',
		'deportes',
		'atacama',
		'Proin eu mi.',
		415844,
		'https://picsum.photos/id/95/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Sole - Iqf',
		'libros',
		'nuble',
		'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
		194354,
		'https://picsum.photos/id/96/300/200',
		FALSE,
		5
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Syrup - Monin, Amaretta',
		'mascotas',
		'metropolitana',
		'Nam dui.',
		499803,
		'https://picsum.photos/id/98/300/200',
		FALSE,
		3
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Seedlings - Buckwheat, Organic',
		'automotriz',
		'metropolitana',
		'Morbi a ipsum.',
		347627,
		'https://picsum.photos/id/99/300/200',
		FALSE,
		2
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Carrots - Jumbo',
		'juguetes',
		'atacama',
		'Duis at velit eu est congue elementum.',
		98317,
		'https://picsum.photos/id/100300/200',
		FALSE,
		3
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Nantucket - Orange Mango Cktl',
		'tecnologia',
		'maule',
		'Etiam pretium iaculis justo.',
		184335,
		'https://picsum.photos/id/101/300/200',
		FALSE,
		6
	);

INSERT INTO
	products (
		product_id,
		titulo,
		categoria,
		region,
		descripcion,
		precio,
		image,
		vendido,
		user_id
	)
VALUES
	(
		DEFAULT,
		'Dried Apple',
		'hogar',
		'antofagasta',
		'Integer ac leo.',
		70017,
		'https://picsum.photos/id/102/300/200',
		FALSE,
		5
	);

--TABLA FAVORITES--
CREATE TABLE
	favorites (
		product_id INT,
		user_id INT,
		CONSTRAINT fk_product FOREIGN KEY(product_id) REFERENCES products(product_id) ON DELETE CASCADE,
		CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
	); 

--TABLA BUYS--
CREATE TABLE
	buys (
		buy_id SERIAL PRIMARY KEY,
		product_id INT,
		user_id INT,
		CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE,
		CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE
	);

