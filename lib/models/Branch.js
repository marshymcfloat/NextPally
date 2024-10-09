const  mongoose = require( 'mongoose')



mongoose.connect('mongodb://127.0.0.1:27017/NextPally').then(()=> {
    console.log('Mongoose is now connected')
}).catch((err)=> {
    console.log('Mongoose connection for Branch has an error saying:', err)
})

const branchSchema = new mongoose.Schema({
    branchCode: {
        type: String,
        required: true,

    },
    branchName: {
        type: String, 
        required: true
    }
})


const Branch = mongoose.model('Branch', branchSchema)
module.exports = Branch

/* const seedBranch =[
{branchCode: 'BBF01', branchName: 'Manicure and Pedicure'},
{branchCode: 'BBF02', branchName: 'Skin Improvement'},
{branchCode: 'BBF03', branchName: 'Massage Therapy'},


]


Branch.insertMany(seedBranch)
  .then((result) => {
    console.log('Branches inserted:', result);
    mongoose.connection.close(); // Close the connection when done
  })
  .catch((err) => {
    console.log('Error inserting branches:', err);
  }); */
