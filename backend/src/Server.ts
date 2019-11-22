import express from 'express'
import * as bodyParser from 'body-parser'
import crypto from 'crypto'


import Model from './utils/Models'
import Gmailer from './utils/Gmailer'
import Gsheets from './utils/GSheets'

import ServerConfig from '../ServerConfig.json';

require('dotenv').config()

const Models = new Model()
const GMailer = new Gmailer()
const GSheets = new Gsheets();

const { port } = ServerConfig
const mun = express()
mun.use(bodyParser.json())
mun.use(bodyParser.urlencoded({extended: true}))
mun.use(express.json())
mun.use(express.urlencoded({extended : true}))


mun.post('/_register', (req, res)=>{
    var auth = generateCredentials(Date.now(), "UNGA", "azim")
    var newReg = new Models.registration({data:req.body, registrationNumber: auth.registrationNumber})
    newReg.setPassword(auth.password)
    newReg.save((err:any, registration:any)=>{
        if(err){
            console.log(err)
        } else {
            GMailer.SingleDataDelivery({
                to : registration.email,
                subject: "JMIMUN 2020 | Registration Successful"
            }, "LOL", [{"id": "registrationNo","data": "15"}])      //Need a typed out mail for this
            .then(()=>{
                GSheets.AppendToSpreadsheet({"ssId": "15", "sheet":"azim", ...req.body})    //spread operator will not work
            })
        }
    })
})

function generateCredentials(time, committee, name) {
    var registrationNumber = "JMIMUN"+committee+time.toString(16)
    var password = crypto.createHash('md5').update("/*JMI*/"+time+"/*MUN*/").digest("hex")
    password = password.substring(0, 8);
    return {"registrationNumber": registrationNumber, "password": password}

}
mun.listen(port, ()=>{
    console.log(`
        ************JMI MUN 2020************
        API server now listening on ${port}
        ************************************
    `)
})
