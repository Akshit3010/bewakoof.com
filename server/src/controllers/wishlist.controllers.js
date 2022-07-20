const User = require('../models/user.model')

const getWishlistProducts = (async (req, res) => {
 const{id} = req.params;
 console.log("id",id)
 
let UserData
let productData;
try{
    UserData = await User.findById(id).populate("wishlist").lean().exec()
    productData= UserData.whishlist;
    return res.status(200).json({productData})
 
}catch(err){
return res.status(503).json({err:err.message})
 }

   
})

module.exports = {
    getWishlistProducts
}