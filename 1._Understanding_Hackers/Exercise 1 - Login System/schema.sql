CREATE TABLE `` (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`email`	TEXT NOT NULL UNIQUE,
	`password`	TEXT NOT NULL
);

CREATE TABLE `login_attempts` (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
	`user_email`	TEXT NOT NULL,
	`timestamp`	NUMERIC NOT NULL
);


INSERT INTO users VALUES('anders@gmail.com', "password");
INSERT INTO users VALUES('cosmin@gmail.com', "admin123");
INSERT INTO users VALUES('pedro@gmail.com', "book1234");