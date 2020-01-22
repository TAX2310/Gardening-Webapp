var mysql = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'softproj',
  database : 'plants'
});


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM PLANTS", function (err, result, fields) {
    if (err) return consol.error(err.massage);
	  else console.log(result);

 });
});
