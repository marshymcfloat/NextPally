const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/NextPally').then(()=> {
    console.log('Mongoose is now connected')
}).catch((err)=> {
    console.log('Mongoose connection for Branch has an error saying:', err)
})



const accountSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    }
})

const Account = mongoose.model('Account', accountSchema)

module.exports = Account