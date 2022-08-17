import mongodb from 'mongodb';

const client = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/';

client.connect(url, (err, client) => {
	const db = client.db('movie-dataset');
	const collection = db.collection('movies_metadata');

	const query = {
		original_title: 'Toy Story',
	};

	const cursor = collection.find(query);

	cursor.forEach(
		function (doc) {
			console.log(doc);
		},

		function (err) {
			client.close();
		}
	);
});
