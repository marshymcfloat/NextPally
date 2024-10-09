const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/NextPally').then(()=> {
    console.log('Mongoose is now connected')
}).catch((err)=> {
    console.log('Mongoose connection for Branch has an error saying:', err)
})


const roleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})


const Role = mongoose.model('Role', roleSchema)

Role.insertMany([
    {title: 'Owner'},
    {title: 'Cashier'},
    {title: 'Owner'},
])
