/* ADD DEPENDANCIES */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
require('./config/db.js');
const Recipe = require('./models/Recipie.js')
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
server.get("/recipies", async (req, res)=> {
    let arrayOfRecipies = await Recipe.find();
    console.log(arrayOfRecipies);
    res.send(arrayOfRecipies);
}) 

server.post("/recipies", async (req, res)=>{
    try {
        let response = await Recipe.create(req.body);
        res.status(201).send(response) 
        console.log("Added Recipe to DB")
    } catch (error) {
        console.log(error);
        res.send("Error pushing Recipe to db")
    }
})

server.delete('/recipies/:idOfRecipie', async (req,res)=>{
    let id = req.params.idOfRecipie;
    let response = await Recipe.findByIdAndDelete(id);
    console.log(response);
    res.send('deleted recipie!')
})
/* END ROUTES */


server.listen(PORT, () => {
    console.log(`Server LIVE on PORT ${PORT} `)
});