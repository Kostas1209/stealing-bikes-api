import express = require('express');
import config from '../config';
import api from './features';
import './db';
require('dotenv').config()
const cors = require("cors");


const app = express();

app.use(cors());

app.use('/api', api)
const port = process.env.PORT || config.port;
app.listen(port, err=>{
    if(err)
    {
        console.log(err)
        return err
    }

    console.log(`Server is listening on ${port}`);
})