import mongoose from 'mongoose'
import crypto from 'crypto'

var registrationSchema = new mongoose.Schema({
    date: {
        category: String,
        name: String,
        email: String,
        accomodation: String,
        pref1: String,
        pref2: String,
        pref3: String,
        experience: String,
        age: String,
        instType: String,
        instType_other: String,
        munxp: String,
        passport: String,
        payment: String
    },
    registrationNumber:String,
    password:String,
    salt: String

})

registrationSchema.methods.SetPassword = (password:string) =>{
    this.salt = crypto.randomBytes(16).toString('hex')
    this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha512').toString('hex')
}

registrationSchema.methods.validPassowrd = (password:string) =>{
    var _hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha512').toString('hex')
    return this.hash === _hash
}
var contactSchema = new mongoose.Schema({
    data: String,
    phone: Number,
    email: String,
    message: String
})

export default class Model {
    registration = mongoose.model('registration', registrationSchema)
}
// export var registration = mongoose.model('registration', this.registrationSchema)
// var contact = mongoose.model('contact', this.contactSchema)
