const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
	if (err) throw err;

	const db = client.db('test');

	var cursor = db.collection('myCollection').find();

	cursor.forEach((err, num) => {
		if (err) {
			return console.log(err);
		}
		console.log(num);
	});
});