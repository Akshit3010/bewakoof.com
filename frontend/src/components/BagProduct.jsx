import React, { useState } from 'react'
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from '@mui/material/Button';
import { useDispatch} from 'react-redux';
import { AddToWish, changeQty, doRemove } from '../Redux/action';
import { useParams } from 'react-router-dom';


export const Bagwrapper = styled.div`

margin:20px 0px;


.productDiv {
    border: 1px solid gray;
    /* padding: 10px; */
    margin:5px;
    width:548.33px;
    border-radius: 5px;
   
  }

  .productDiv > div:nth-child(1){
    font-family: "Montserrat";
    font-size: 14px;
    /* margin: 5px; */
    padding: 10px;
    /* border: 1px solid green; */
    display: flex;
    justify-content: space-between;
    color: gray;
  }

  .productDiv > div:nth-child(2){
    font-family: "Montserrat";
    font-size: 14px;
    display: flex;
    justify-content: center;
    color: gray;

  }
  .productDiv>div>div>div{
    margin:5px;
    /* border:1px solid red; */
  }
  .buttonSection>div:nth-child(1){
   width:40%;
   border-top:0.5px solid gray;
   border-right:1px solid gray;
   height:50px;
   text-align: center;
   font-size:16px;
 

  }
  
  .buttonSection>div:nth-child(2){
    width:60%;
   border-top:0.5px solid gray;

   height:50px;
   text-align: center;
   font-size:16px;

 
}


  #spfirst {
    color: black;
    font-size: 18px;
    font-weight: bold;
    padding-right: 8px;
  }
  #savedprice {
    color: green;
    font-weight: 400;
  }
  .formcont{
    width:100px;
    margin:20px;
    
  }
    .selectDiv{
    width: 250px;
    display:flex;
    justify-content: space-between;
    
  }
  #demo-simple-select{
    height:10px;
    font-size: 16px;
  }

  .imgtag {
    width: 88px;
    height: 109.5px;
  }

`

export const BagProduct = ({ _id,title, price, strikedOffprice, imgUrl,qty }) => {
  
  const dispatch = useDispatch()  
  const {id} = useParams()
  const [qtyvalue,setQty] = useState(qty);

  console.log(qtyvalue,"outside")
  // console.log(mainqty,"mainqty")
  const handleChange = (e) => {
    // e.preventDefalut();
    console.log(qtyvalue,"before")
    setQty(e.target.value)
    console.log(qtyvalue,"after")
    dispatch(changeQty(_id,e.target.value,id))
    
  }

  const  handleRemove = ()=>{
      
    dispatch(doRemove(_id,id))
   
  }
  
  const AddtoWishlist = ()=>{
   
   dispatch(AddToWish(_id,id))
  }



  return (
    <>
      <Bagwrapper>
        <div className="productDiv">
          <div>
            <div>
              <div>
                {title}
              </div>
              <div>
                <span id="spfirst">₹{price}</span>
                <span>₹{strikedOffprice}</span>
              </div>
              <div id="savedprice">You saved ₹{strikedOffprice - price} !</div>
              <div className="selectDiv">
                <FormControl className="formcont">
                  <InputLabel id="demo-simple-select-label">
                    Size
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                  // onChange={handleChange}
                  >
                    <MenuItem value={'S'}>S</MenuItem>
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"L"}>L</MenuItem>
                    <MenuItem value={'XL'}>XL</MenuItem>
                    <MenuItem value={"2Xl"}>2XL</MenuItem>
                    <MenuItem value={"3XL"}>3XL</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className="formcont">
                  <InputLabel id="demo-simple-select-label">
                    Qty
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={qtyvalue}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <img
                className="imgtag"
                src={imgUrl}
                alt="invalid-image"
              />
            </div>
          </div>
          <div className="buttonSection">
            <div className="cursor-pointer" onClick={handleRemove}>Remove</div>
            <div className="cursor-pointer" onClick={AddtoWishlist}>Move to Wishlist</div>
          </div>
        </div>
      </Bagwrapper>
    </>
  )
}


// 0:
// brand: "Bewakoof"
// category: "Men"
// createdAt: "2022-07-22T14:57:23.697Z"
// description: "Gojo Domain Half Sleeve T-Shirt. Country of Origin - India. Manufactured By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amne, Bhiwandi,Thane, Maharashtra 421302. Packed By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amne, Bhiwandi,Thane, Maharashtra 421302. Commodity - Men's T-Shirt. Product Specifications. Regular fit - Fitted at Chest and Straight on Waist Down. Single Jersey, 100% Cotton Classic, lightweight jersey fabric comprising 100% cotton."
// imgArray: (5) ['https://images.bewakoof.com/t1080/gojo-domain-half-sleeve-t-shirt-520753-1658344246-1.jpg', 'https://images.bewakoof.com/t1080/gojo-domain-half-sleeve-t-shirt-520753-1658344251-2.jpg', 'https://images.bewakoof.com/t1080/gojo-domain-half-sleeve-t-shirt-520753-1658344257-3.jpg', 'https://images.bewakoof.com/t1080/gojo-domain-half-sleeve-t-shirt-520753-1658344262-4.jpg', 'https://images.bewakoof.com/t1080/gojo-domain-half-sleeve-t-shirt-520753-1658344267-5.jpg']
// imgUrl: "https://images.bewakoof.com/t1080/gojo-domain-half-sleeve-t-shirt-520753-1658344246-1.jpg"
// price: 299
// qty: 1
// rating: 3.5
// reviews: null
// sizes: (4) ['S', 'M', 'L', 'XL']
// strikedOffprice: 999
// title: "Men's Black Gojo Domain Graphic Printed T-shirt"
// updatedAt: "2022-07-22T14:57:23.697Z"
// __v: 0
// _id: "62dabad32fec84c1ab465c1f"