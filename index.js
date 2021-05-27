const express = require('express');
const app = express()
const http = require('http').Server(app);
const path = require("path")
const httpPort = 80;
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, '../frontend/dist/frontend')))
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/dist/frontend'))
})
app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname, '../frontend/dist/frontend/index.html'))
})

http.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}!`)
})

mongoose.connect('mongodb+srv://admin:admin@datacluster.xjitt.mongodb.net/anbralette?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const itemSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: String,
  images: String,
  sizes: String,
  description: String,
});
itemSchema.methods.log = function () {
  console.log(this);
}
const Item = mongoose.model('Kitten', itemSchema);
const item1 = new Item({
  id: "1111",
  name: "2222",
  price: "3333",
  images: "4444",
  sizes: "5555",
  description: "6666",
})


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected")
  item1.save(function (err, model) {
    if (err) return console.error(err);
    model.log();
  });
});