import express from 'express'
import * as bodyParser from 'body-parser'

import ServerConfig from '../ServerConfig.json';

require('dotenv').config()

const { port } = ServerConfig
const mun = express()
mun.use(bodyParser.json())
mun.use(bodyParser.urlencoded({extended: true}))
mun.use(express.json())
mun.use(express.urlencoded({extended : true}))


mun.listen(port, ()=>{
    console.log(`
        ************JMI MUN 2020************
        API server now listening on ${port}
        ************************************
    `)
})
