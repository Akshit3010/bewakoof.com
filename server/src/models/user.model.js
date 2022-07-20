const {Schema,model} = require('mongoose')

const userSchema = new Schema({
  first_name:{type:String, required:true},
  Last_name:{type:String, required:true},
  username:{type:String, required:true},
  email:{type:String, required:true,unique:true},
  password:{type:String, required:true},
  date_of_birth:{type:String},
  gender:{type:String},
  phone_number:{type:Number},
  mybag:[{type:Schema.Types.ObjectId, ref:'product'}],
  wishlist:[{type:Schema.Types.ObjectId, ref:'product'}],
  myorders:[{type:Schema.Types.ObjectId, ref:'product'}],
  addresses:[{type:String,}],
},{
  timestamps:true
})

const User = model('user',userSchema)
module.exports = User;
