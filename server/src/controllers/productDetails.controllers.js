const User = require('../models/user.model')

const addToCart = (async (req, res) => {
   
    const{id} = req.params
    const{productId} = req.body;

    let UserData
    let productData;
    try{
        UserData = await User.findByIdAndUpdate(id,{$push:{mybag:productId}})
        productData= UserData.mybag;
        return res.status(200).json({productData})
     
    }catch(err){
    return res.status(501).json({err:err.message})
     }
    
})

module.exports = {
    addToCart
}