import express, { Request, Response } from 'express'
import * as bodyParser from 'body-parser'
import crypto from 'crypto'


import Model from './utils/Models'
import Gmailer from './utils/Gmailer'
import Gsheets from './utils/GSheets'
import { Firestore as Database } from './utils/Database'

import ServerConfig from '../ServerConfig.json';
import { database } from 'firebase'

require('dotenv').config()

const Models = new Model()
const GMailer = new Gmailer()
const GSheets = new Gsheets();

const { port } = ServerConfig
const mun = express()
mun.use(bodyParser.json())
mun.use(bodyParser.urlencoded({ extended: true }))
mun.use(express.json())
mun.use(express.urlencoded({ extended: true }))


mun.post('/_register', (req, res) => {
    var auth = generateCredentials(Date.now(), "UNGA", "azim")
    Database.collection("applications").doc(auth.registrationNumber).set({ "auth": auth, "data": req.body }).then(() => {
        GMailer.SingleDataDelivery({
            to: req.body.email,
            subject: "JMIMUN 2020 | Registration Successful"
        }, "LOL", [{ "id": "registrationNo", "data": "15" }])      //Need a typed out mail for this
            .then(() => {
                GSheets.AppendToSpreadsheet({ "ssId": "15", "sheet": "azim", ...req.body })    //spread operator will not work
            })

    })
})

mun.get('/matrix/:committee', (req: Request, res: Response) => {
    var committee = req.params.committee
    Database.collection('matrix').doc(committee).get().then((document) => {
        if (document.exists) {
            res.json({ "message": "success", "matrix": document.data })
        } else {
            res.json({ "message": "error" })
        }
    })
})

mun.get('/matrix/:committee/:portfolio', (req, res) => {
    let { committee, portfolio } = req.params;
    Database.collection('matrix').doc(committee).get().then((document) => {
        if (document.exists) {
            if (document.data[portfolio].status === 'available') {
                res.json({ "message": "available" })
            } else {
                res.json({ "message": "unavailable" })
            }
        } else {
            res.json({ "message": "invalid portfolio" })
        }
    })
})

mun.post('/_contact', (req, res) => {
    let { name, email, message, phone } = req.body
    GMailer.SingleDataDelivery(
        {
            to: ""/*config.email*/,
            subject: "New Enquiry",
        }, "LOL", [{ "id": "message", "data": message }, { "id": "phone", "data": phone }, { "id": "email", "data": email }, { "id": "name", "data": name }]
    ).then(() => {
        Database.collection('contact').doc(Date.now()+'/'+name).set(req.body)
    })
})


function generateCredentials(time, committee, name) {
    var registrationNumber = "JMIMUN" + committee + time.toString(16)
    var password = crypto.createHash('md5').update("/*JMI*/" + time + "/*MUN*/").digest("hex")
    password = password.substring(0, 8);
    return { "registrationNumber": registrationNumber, "password": password }

}
mun.listen(port, () => {
    console.log(`
        ************JMI MUN 2020************
        API server now listening on ${port}
        ************************************
    `)
})
