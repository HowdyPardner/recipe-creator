/* ADD DEPENDANCIES */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
require('./config/db.js');
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
app.use((req, res) => {
    if(req.path.startsWith('/server')){
        req.url = req.url.replace('/server', '');
    }
    next();
})
/* END MIDDLEWARE */


/* START ROUTES */
/* END ROUTES */


server.listen(PORT, () => {
    console.log(`Server LIVE on PORT ${PORT} `)
});