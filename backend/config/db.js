// add mongoose dependancy
const mongoose = require('mongoose');


//connect to MongoDb via mongoose
mongoose.connect(process.env.CONNECTION_STRING, {
    userNewUrlParser:true,
    useUnifiedTopology: true,   
});



// create log to confirm we are connected to the db
mongoose.connection.once('open', () => {
    console.log('connected to Database')
})