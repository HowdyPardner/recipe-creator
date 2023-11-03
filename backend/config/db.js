// add mongoose dependancy
const mongoose = require('mongoose');

let connectionString = `mongodb+srv://db_admin:${process.env.MONGO_PASS}@cluster0.pczbleq.mongodb.net/?retryWrites=true&w=majority`


//connect to MongoDb via mongoose
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// mongoose.connect(process.env.CONNECTION_STRING, {
//     userNewUrlParser:true,
//     useUnifiedTopology: true,   
// });



// create log to confirm we are connected to the db
mongoose.connection.once('open', () => {
    console.log('connected to Database')
})