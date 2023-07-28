CREATE DATABASE sipo;

--TABLA DE USUARIOS--
CREATE TABLE
	users (
		fecha DATE NOT NULL DEFAULT CURRENT_DATE,
		user_id SERIAL PRIMARY KEY,
		nombre VARCHAR(50),
		apellidos VARCHAR(50),
		email VARCHAR(50),
		password VARCHAR(50),
		image VARCHAR(250)
	);

INSERT INTO
	users (user_id, nombre, apellidos, email, password)
VALUES
	(1, 'Raul', 'Low', 'rlow@mail.com', '12345', NULL);

INSERT INTO
	users (user_id, nombre, apellidos, email, password)
VALUES
	(
		2,
		'Ariel',
		'Sandoval',
		'asandoval@mail.com',
		'12345',
		NULL
	);

INSERT INTO
	users (user_id, nombre, apellidos, email, password)
VALUES
	(
		3,
		'Rosabelle',
		'Vitet',
		'rvitet2@so-net.ne.jp',
		'12345',
		NULL
	);

INSERT INTO
	users (user_id, nombre, apellidos, email, password)
VALUES
	(
		4,
		'Bob',
		'Grinin',
		'bgrinin3@desdev.cn',
		'12345',
		NULL
	);

INSERT INTO
	users (user_id, nombre, apellidos, email, password)
VALUES
	(
		5,
		'Giovanna',
		'Baud',
		'gbaud4@pcworld.com',
		'12345',
		NULL
	);

INSERT INTO
	users (user_id, nombre, apellidos, email, password)
VALUES
	(
		6,
		'Courtney',
		'Ferguson',
		'cferguson1@over-blog.com',
		'12345',
		NULL
	);

--TABLA DE PRODUCTOS--
CREATE TABLE
	products (
		product_id SERIAL PRIMARY KEY,
		titulo VARCHAR(50),
		categoria VARCHAR(20),
		region VARCHAR(20),
		descripcion VARCHAR(250),
		precio INT,
		image VARCHAR(250),
		vendido BOOLEAN,
		user_id INT,
		CONSTRAINT fk_user
			FOREIGN KEY (user_id)
				REFERENCES users(user_id)
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
		1,
		'Wine - Chardonnay South',
		'juguetes',
		'maule',
		'Nullam porttitor lacus at turpis.',
		19492,
		'https://picsum.photos/seed/picsum/300/200',
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
		2,
		'Coffee Caramel Biscotti',
		'juguetes',
		'arica',
		'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
		45307,
		'https://picsum.photos/seed/picsum/300/200',
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
		3,
		'Nut - Hazelnut, Ground, Natural',
		'hogar',
		'tarapaca',
		'Curabitur at ipsum ac tellus semper interdum.',
		195424,
		'https://picsum.photos/seed/picsum/300/200',
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
		4,
		'Cotton Wet Mop 16 Oz',
		'tecnologia',
		'magallanes',
		'Aliquam non mauris.',
		177568,
		'https://picsum.photos/seed/picsum/300/200',
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
		5,
		'Tortillas - Flour, 8',
		'automotriz',
		'aysen',
		'Aliquam sit amet diam in magna bibendum imperdiet.',
		182168,
		'https://picsum.photos/seed/picsum/300/200',
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
		6,
		'Pepper - Red, Finger Hot',
		'libros',
		'maule',
		'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
		205079,
		'https://picsum.photos/seed/picsum/300/200',
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
		7,
		'Flour - Chickpea',
		'automotriz',
		'valparaiso',
		'Morbi a ipsum.',
		51084,
		'https://picsum.photos/seed/picsum/300/200',
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
		8,
		'Doilies - 12, Paper',
		'juguetes',
		'metropolitana',
		'Fusce consequat.',
		171457,
		'https://picsum.photos/seed/picsum/300/200',
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
		9,
		'Water - Spring Water, 355 Ml',
		'tecnologia',
		'tarapaca',
		'In hac habitasse platea dictumst.',
		98118,
		'https://picsum.photos/seed/picsum/300/200',
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
		10,
		'Nacho Chips',
		'automotriz',
		'maule',
		'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
		22072,
		'https://picsum.photos/seed/picsum/300/200',
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
		11,
		'Rice - Sushi',
		'juguetes',
		'tarapaca',
		'Pellentesque ultrices mattis odio.',
		135288,
		'https://picsum.photos/seed/picsum/300/200',
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
		12,
		'Cheese - Le Cheve Noir',
		'hogar',
		'tarapaca',
		'Maecenas ut massa quis augue luctus tincidunt.',
		52992,
		'https://picsum.photos/seed/picsum/300/200',
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
		13,
		'Beer - Blue',
		'juguetes',
		'aysen',
		'Cras non velit nec nisi vulputate nonummy.',
		216165,
		'https://picsum.photos/seed/picsum/300/200',
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
		14,
		'Spice - Chili Powder Mexican',
		'hogar',
		'ohiggins',
		'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
		178857,
		'https://picsum.photos/seed/picsum/300/200',
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
		15,
		'Sobe - Lizard Fuel',
		'mascotas',
		'loslagos',
		'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
		89467,
		'https://picsum.photos/seed/picsum/300/200',
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
		16,
		'Juice - Prune',
		'hogar',
		'coquimbo',
		'Duis bibendum.',
		99158,
		'https://picsum.photos/seed/picsum/300/200',
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
		17,
		'Figs',
		'libros',
		'aysen',
		'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
		13375,
		'https://picsum.photos/seed/picsum/300/200',
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
		18,
		'Croissants Thaw And Serve',
		'tecnologia',
		'maule',
		'Aliquam non mauris.',
		92422,
		'https://picsum.photos/seed/picsum/300/200',
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
		19,
		'Frangelico',
		'juguetes',
		'atacama',
		'Praesent blandit lacinia erat.',
		105974,
		'https://picsum.photos/seed/picsum/300/200',
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
		20,
		'Mangostein',
		'juguetes',
		'antofagasta',
		'Praesent id massa id nisl venenatis lacinia.',
		98387,
		'https://picsum.photos/seed/picsum/300/200',
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
		21,
		'Star Anise, Whole',
		'automotriz',
		'metropolitana',
		'Sed ante.',
		12682,
		'https://picsum.photos/seed/picsum/300/200',
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
		22,
		'Sobe - Green Tea',
		'tecnologia',
		'arica',
		'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
		203361,
		'https://picsum.photos/seed/picsum/300/200',
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
		23,
		'Wasabi Powder',
		'mascotas',
		'losrios',
		'Praesent lectus.',
		180927,
		'https://picsum.photos/seed/picsum/300/200',
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
		24,
		'Pernod',
		'juguetes',
		'atacama',
		'Pellentesque ultrices mattis odio.',
		77743,
		'https://picsum.photos/seed/picsum/300/200',
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
		25,
		'Capers - Ox Eye Daisy',
		'tecnologia',
		'arica',
		'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
		140413,
		'https://picsum.photos/seed/picsum/300/200',
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
		26,
		'Glove - Cutting',
		'deportes',
		'magallanes',
		'Nunc rhoncus dui vel sem.',
		48543,
		'https://picsum.photos/seed/picsum/300/200',
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
		27,
		'Wine - Beaujolais Villages',
		'deportes',
		'valparaiso',
		'Mauris ullamcorper purus sit amet nulla.',
		156328,
		'https://picsum.photos/seed/picsum/300/200',
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
		28,
		'Baking Soda',
		'mascotas',
		'araucania',
		'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
		110186,
		'https://picsum.photos/seed/picsum/300/200',
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
		29,
		'Pork Casing',
		'juguetes',
		'loslagos',
		'Sed accumsan felis.',
		129986,
		'https://picsum.photos/seed/picsum/300/200',
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
		30,
		'Eggplant - Baby',
		'tecnologia',
		'biobio',
		'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
		172791,
		'https://picsum.photos/seed/picsum/300/200',
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
		31,
		'Beef - Ox Tongue, Pickled',
		'tecnologia',
		'biobio',
		'Aliquam erat volutpat.',
		184801,
		'https://picsum.photos/seed/picsum/300/200',
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
		32,
		'Ecolab Silver Fusion',
		'juguetes',
		'losrios',
		'Morbi a ipsum.',
		122760,
		'https://picsum.photos/seed/picsum/300/200',
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
		33,
		'Sprouts - Corn',
		'juguetes',
		'biobio',
		'Phasellus sit amet erat.',
		224287,
		'https://picsum.photos/seed/picsum/300/200',
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
		34,
		'Doilies - 10, Paper',
		'automotriz',
		'antofagasta',
		'Nullam porttitor lacus at turpis.',
		40301,
		'https://picsum.photos/seed/picsum/300/200',
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
		35,
		'Pickles - Gherkins',
		'automotriz',
		'maule',
		'Fusce posuere felis sed lacus.',
		233883,
		'https://picsum.photos/seed/picsum/300/200',
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
		36,
		'Fennel - Seeds',
		'hogar',
		'tarapaca',
		'Nulla suscipit ligula in lacus.',
		125603,
		'https://picsum.photos/seed/picsum/300/200',
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
		37,
		'Table Cloth 54x72 Colour',
		'libros',
		'maule',
		'Morbi ut odio.',
		74304,
		'https://picsum.photos/seed/picsum/300/200',
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
		38,
		'Appetizer - Assorted Box',
		'libros',
		'valparaiso',
		'Sed vel enim sit amet nunc viverra dapibus.',
		64511,
		'https://picsum.photos/seed/picsum/300/200',
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
		39,
		'Salt - Seasoned',
		'tecnologia',
		'loslagos',
		'Nam dui.',
		23284,
		'https://picsum.photos/seed/picsum/300/200',
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
		40,
		'Bagel - Everything Presliced',
		'juguetes',
		'biobio',
		'Etiam faucibus cursus urna.',
		88230,
		'https://picsum.photos/seed/picsum/300/200',
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
		41,
		'Wanton Wrap',
		'mascotas',
		'maule',
		'Praesent blandit lacinia erat.',
		177829,
		'https://picsum.photos/seed/picsum/300/200',
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
		42,
		'Ham Black Forest',
		'automotriz',
		'tarapaca',
		'Nulla ut erat id mauris vulputate elementum.',
		200051,
		'https://picsum.photos/seed/picsum/300/200',
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
		43,
		'Tea - Mint',
		'tecnologia',
		'valparaiso',
		'Morbi vel lectus in quam fringilla rhoncus.',
		185928,
		'https://picsum.photos/seed/picsum/300/200',
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
		44,
		'Ginger - Pickled',
		'hogar',
		'maule',
		'Integer ac neque.',
		29072,
		'https://picsum.photos/seed/picsum/300/200',
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
		45,
		'Cheese - Woolwich Goat, Log',
		'libros',
		'antofagasta',
		'Quisque porta volutpat erat.',
		53389,
		'https://picsum.photos/seed/picsum/300/200',
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
		46,
		'Duck - Legs',
		'mascotas',
		'biobio',
		'Suspendisse potenti.',
		145602,
		'https://picsum.photos/seed/picsum/300/200',
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
		47,
		'Soap - Pine Sol Floor Cleaner',
		'juguetes',
		'araucania',
		'Aenean auctor gravida sem.',
		148583,
		'https://picsum.photos/seed/picsum/300/200',
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
		48,
		'Oranges',
		'tecnologia',
		'biobio',
		'Curabitur convallis.',
		40575,
		'https://picsum.photos/seed/picsum/300/200',
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
		49,
		'Foil Cont Round',
		'hogar',
		'ohiggins',
		'Cras pellentesque volutpat dui.',
		144354,
		'https://picsum.photos/seed/picsum/300/200',
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
		50,
		'Mustard - Pommery',
		'libros',
		'metropolitana',
		'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
		76862,
		'https://picsum.photos/seed/picsum/300/200',
		FALSE,
		1
	);

--TABLA BUYS--
CREATE TABLE
	buys (
		buy_id SERIAL PRIMARY KEY,
		product_id INT,
		user_id INT,
		CONSTRAINT fk_product
			FOREIGN KEY (product_id)
				REFERENCES products(product_id)
		CONSTRAINT fk_user
			FOREIGN KEY (user_id)
				REFERENCES users(user_id)
	);

--TABLA FAVORITES--
CREATE TABLE
	favorites (
		product_id INT,
		user_id INT,
		CONSTRAINT fk_product
			FOREIGN KEY (product_id)
				REFERENCES products(product_id)
		CONSTRAINT fk_user
			FOREIGN KEY (user_id)
				REFERENCES users(user_id)
	);
