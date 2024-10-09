const mongoose = require('mongoose')



mongoose.connect('mongodb://127.0.0.1:27017/NextPally').then(()=> {
    console.log('Mongoose is now connected')
}).catch((err)=> {
    console.log('Mongoose connection for Services has an error saying:', err)
})


const paymentmethodSchema = new mongoose.Schema({
    paymentName: {
        type: String,
        required: true
    }
})

const PaymentMethod = mongoose.model('PaymentMethod', paymentmethodSchema)

PaymentMethod.insertMany([
    {paymentName: 'E-wallet'},
    {paymentName: 'Bank transfer'},
    {paymentName: 'Cash'},

])
