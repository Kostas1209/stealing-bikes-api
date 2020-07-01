import express = require('express');
import config from '../config';
import api from './features';
import './db';


const app = express();

app.use('/api', api)

app.listen(config.port, err=>{
    if(err)
    {
        console.log(err)
        return err
    }

    console.log(`Server is listening on ${config.port}`);
})