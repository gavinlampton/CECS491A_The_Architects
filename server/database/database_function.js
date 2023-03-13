//Test Variables
var first_name = 'H';
var last_name = 'A';
var email = '@gmail.com';
var phone_number = '123121412';
var sale_notification = 1;
var newstock_notification = 0;

//Call Function
addcustomer(first_name, last_name, email, phone_number, sale_notification, newstock_notification);

function addcustomer(first_name, last_name, email, phone_number, sale_notification, newstock_notification){
  //connect to MySQL Database
  conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  })

  //SQL Statement
  var sql = "INSERT INTO customer (first_name, last_name, email, phone_number, sale_notification, newstock_notification) " + 
  "VALUES ('"+first_name+"','"+last_name+"','"+email+"','"+phone_number+"',"+sale_notification+", "+newstock_notification+")";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  //end connection so you can use Terminal Afterwards
  conn.end();
}