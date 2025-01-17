const mongoose = require('mongoose');


 const mongoURL = 'mongodb://localhost:27017/Newdatabase';


mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

  const db = mongoose.connection

  db.on('connected',()=>{
    console.log('Database connected succesfully');
  })

  db.on('error',()=>{
    console.log('Database connection error');
  })

  db.on('disconnected',()=>{
    console.log('server is disconnected')
  })

  module.exports = db;