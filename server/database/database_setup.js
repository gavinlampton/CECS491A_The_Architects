//JS code to send MySQL commands courtesy of https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp

function setupDatabase(){
	let mysql = require('mysql');
	const name = "test_db";

	//------------Create database----------------

	let con = mysql.createConnection({
	  host: "localhost",
	  user: "Admin",
	  password: "12345"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  let sql = 
	  [
		"DROP DATABASE IF EXISTS "+name+";",
		"CREATE DATABASE IF NOT EXISTS "+name+";"
	  ];
	  
	  for(const element of sql)
	  {
		  con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Tables created");
		  });
	  }
	});
	
	//------------Connect to database----------------
	
	con = mysql.createConnection({
	  host: "localhost",
	  user: "Admin",
	  password: "12345",
	  database: name
	});
	
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  let sql = 
	  [
		"CREATE TABLE category (    name varchar(50)  NOT NULL,    CONSTRAINT category_pk PRIMARY KEY (name));",
		"CREATE TABLE customer (  id int  NOT NULL AUTO_INCREMENT,    full_name varchar(30)  NOT NULL,   email varchar(30)  NOT NULL,    phone varchar(11)  NOT NULL,    enrollment_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,    sale_notification bool  NOT NULL,    stock_notification bool  NOT NULL,    CONSTRAINT customer_pk PRIMARY KEY (id));",
		"CREATE TABLE login (    username varchar(20)  NOT NULL,    password varchar(64)  NOT NULL,    role varchar(20)  NOT NULL,    email varchar(20)  NOT NULL,    CONSTRAINT login_pk PRIMARY KEY (username,password));",
		"CREATE TABLE preference (    customer_id int  NOT NULL,    category varchar(50)  NOT NULL,    CONSTRAINT preference_pk PRIMARY KEY (customer_id,category));",
		"ALTER TABLE preference ADD CONSTRAINT Preferences_Categories FOREIGN KEY Preferences_Categories (category)    REFERENCES category (name);",
		"ALTER TABLE preference ADD CONSTRAINT Preferences_Customer FOREIGN KEY Preferences_Customer (customer_id)    REFERENCES customer (id);"
	  ];
	  
	 
	  for(const element of sql)
	  {
		  con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Tables created");
		  });
	  }
	});
	
	return 0;
}