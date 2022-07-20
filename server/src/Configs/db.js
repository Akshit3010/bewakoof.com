const mongoose = require('mongoose')
const db = 'mongodb://localhost:27017/bewakoof'
const connect =()=>{
 return  mongoose.connect(db)
}
module.exports = {connect,db}