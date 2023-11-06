/* ADD DEPENDANCIES */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
require('./config/db.js');
const Recipe = require('./models/Recipe.js')
const server = express();
const PORT = 3000;
/* END DEPENDANCIES */


/*  MODELS */
// const testModel = require('./models/modelFile.js')
/* END MODELS */


/* START MIDDLEWARE */
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors({
    origin: "*"
}));

// Add proxy for /server routing
// server.use((req, res) => {
//     if(req.path.startsWith('/server')){
//         req.url = req.url.replace('/server', '');
//     }
//     next()
// })
/* END MIDDLEWARE */


/* START ROUTES */
server.get("/recipes", async (req, res)=> {
    let arrayOfrecipes = await Recipe.find();
    console.log(arrayOfrecipes);
    res.send(arrayOfrecipes);
}) 

server.post("/recipes", async (req, res)=>{
    try {
        let response = await Recipe.create(req.body);
        res.status(201).send(response) 
        console.log("Added Recipe to DB")
    } catch (error) {
        console.log(error);
        res.send("Error pushing Recipe to db")
    }
})

server.put("/recipes", async (req, res) => {
    try {
        let response = await Recipe.findByIdAndUpdate(req.body._id, req.body, {new:true});
        res.status(201).send(response)
        console.log("Added Recipe to DB")
    } catch (error) {
        console.log(error);
        res.send("Error pushing Recipe to db")
    }
})

server.delete('/recipes/:idOfrecipe', async (req,res)=>{
    let id = req.params.idOfrecipe;
    let response = await Recipe.findByIdAndDelete(id);
    console.log(response);
    res.send('deleted recipe!')
})
/* END ROUTES */


server.listen(PORT, () => {
    console.log(`Server LIVE on PORT ${PORT} `)
});