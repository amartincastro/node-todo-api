// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

// deleteMany
db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  console.log(result);
});

// deleteOne

// findOneAndDelete

  // client.close(); //updates for MongoDB 3.0+
});
