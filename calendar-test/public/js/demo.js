

// cant do on client side need to pass result from index.js
const mysql = require('mysql');
const db = mysql.createConnection ({
  host     : 'localhost',
  user     : 'root',
  password : 'Mathilda01',
  database : 'softProj'

});

db.connect(function(err) {
  if (err) throw err;
  db.query("SELECT * FROM plants", function (err, result, fields) {
    // if (err) throw err;
    if (err) return console.error(err.massage);
    else console.log(result);

    var events = [];
    
    for (var i = 0; i < result.length; i++) {
		var obj = {'Date': new Date(result[i].whenToPlant), 'Title': 'Plant: ' + result[i].name};
		var obj2 = {'Date': new Date(result[i].whenToHarvest), 'Title': 'harvest: ' + result[i].name};
		events.push(obj);
		events.push(obj2);
	}
  });
});

var events = [];

var settings = {};
var element = document.getElementById('caleandar');
console.log(element);
caleandar(element, events, settings);