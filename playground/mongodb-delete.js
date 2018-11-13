// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

// deleteMany
// client.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

// deleteOne
// client.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

// findOneAndDelete
// client.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result)
// });

// client.collection('Users').deleteMany({name: 'Ariel'});

client.collection('Users').findOneAndDelete({
  _id: new ObjectID("5be368dcb659b54a9e849a50")
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});

  // client.close(); //updates for MongoDB 3.0+
});
