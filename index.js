const express = require('express');
const app = express()
const http = require('http').Server(app);
const path = require("path")
const httpPort = 80;
const mongoose = require('mongoose');
const indexRoutes = require("./routes/index.js")
const cors = require("cors")


mongoose.connect('mongodb+srv://admin:admin@datacluster.xjitt.mongodb.net/anbralette?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

///////////////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use(express.static(path.join(__dirname, '../frontend/dist/frontend')))
app.use(indexRoutes);
app.get('/static/images/:name',function(req,res) {
  res.sendFile(path.join(__dirname, './resources/images/'+req.params.name))
})
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/dist/frontend'))
})
app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname, '../frontend/dist/frontend/index.html'))
})

///////////////////////////////////////////////////////////////

http.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}!`)
})

///////////////////////////////////////////////////////////////

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected")
});