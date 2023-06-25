const express =require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const claimRoute= require('./routes/claimRoute');

const app = express();
app.use(bodyParser.json());
app.use('/api',claimRoute);
const DB_URI= "mongodb+srv://Amangupta:password-cluster.abvml.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URI);
mongoose.connection.once('open',()=>{
    console.log('connected to mongoDB')
}).on('error',(error)=>{
    console.log(error);
});

app.listen(8000,()=>{
    console.log('Server is running')
})