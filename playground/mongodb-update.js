// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

client.collection('Todos').findOneAndUpdate({_id: new ObjectID ("5bea0a1c1eac6bce91f68468")
}, {
  $set: {
    completed: true,
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
})

  // client.close(); //updates for MongoDB 3.0+
});
