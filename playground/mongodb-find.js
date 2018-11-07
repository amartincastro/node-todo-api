// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    consoloe.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch todos', err);
  });

  const db = client.db('TodoApp'); //updates for MongoDB 3.0+


  client.close(); //updates for MongoDB 3.0+
});
