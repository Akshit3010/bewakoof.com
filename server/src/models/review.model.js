const {Schema,model} = require('mongoose')

const reviewSchema = new Schema({
 productId:{type:Schema.Types.ObjectId,ref:'product',required:true},
 userId:{type:Schema.Types.ObjectId,ref:'user',required:true},
 msg:{type:String, required:true},

},{
  timestamps:true
})

const Review = model('review',reviewSchema)
modules.exports = User;
