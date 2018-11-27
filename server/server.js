//library imports
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

//local imports
var {mongoose} = require ('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/123
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

if (!ObjectID.isValid(id)) {
  return res.status(404).send();
}

Todo.findById(id).then((todo) => {
  if (!todo) {
    return res.status(404).send();
  }

  res.send({todo});

}).catch((e) => {
  res.status(400).send();
});
  //validate ID as valid using isValid
    // else respond 404 - send back empty body using send without passing in a value     res.status(400).send(e);

//then queryt database looking for matching document using findById
  // success
    // if todo success - send it back
    // if no todo - send 404 with empty body
    // 400 - send empty body

});

app.listen(port, () => {
  console.log(`Started up at port ${port}`)
});

module.exports = {app};
