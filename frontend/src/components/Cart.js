import React from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from '@mui/material/Button';

const CartWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  height: 800px;
  width: 90%;
  margin: auto;
  /* border: 1px solid red; */

  .headingDiv {
    /* border: 1px solid blue; */
    margin: 15px;
    padding: 10px;
  }
  .headingDiv > span {
    font-weight: bold;
  }

  .container {
    /* border: 1px solid green; */
    height: 600px;
    width: 98%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .leftcont {
    width: 65%;
    /* border: 1px solid green; */
  }

  .truckmove {
    width: 19px;
    height: 12px;
    animation-duration: 2s;
    position: absolute;
    animation: mymove 9s;
  }
  .truckmove ~ span {
    margin-left: 25px;
    /* border: 1px solid red; */
    font-size: 12px;
    position: relative;
    align-self: baseline;
  }
  .truckDiv {
    padding: 8px;

    background-color: #fcffee;
    height: 40px;
  }

  @keyframes mymove {
    from {
      left: 0px;
    }

    to {
      left: 60%;
    }
  }

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

  .rightcont {
    width:376.656px;
    /* border: 1px solid green; */
  }
  
  .saveExtra{
    background-color: #fdd835;
    margin: 0 0 15px 0;
    padding:15px;
    width:376.656px;
    height:50px;
    font-family: "Montserrat";
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    /* border:1px solid red; */
    margin:

  }

 .simplehappy10{
    width:376.656px;
    padding:5px;
    font-family: "Montserrat";
    border-radius: 5px;
    font-size: 14px;
    border:1px solid gray;
    line-height:20.6px;
    margin: 0 0 15px 0;
    
  }

.coupenDiv{
    width:95%;
  background-color: #ebf6f5;
 color:#42a2a2;
 font-size:14px;
 margin: 10px;
 padding: 5px 2px;
 border-radius: 5px;
 display: flex;
 justify-content: space-between;
 font-family: "Montserrat";
 font-size:12px;


}
.coupenDiv>span:nth-child(2){
    font-weight: bold;
}


.priceSection{
    border:1px solid gray;
}

.prsummary{
 height: 37px;
 padding: 10px 5px;
 background-color:#f5f5f5;
 color: #070606;
 font-family: "Montserrat";
 font-size:12px;
 font-weight: bolder;
 box-sizing: border-box;
 margin: 0px 0px 15px 0px;

}

.summarysec{
    padding:5px;
    margin:10px 0px;
}
.summarysec>div{
  
    padding:2.5px;
    display: flex;
    justify-content: space-between;
    font-family: "Montserrat";
    font-size:12px;
  
}

.saving{
    background-color:#e8f3e5 ;
    color:#235f30;
    font-family: "Montserrat";
    font-size:12px;
    padding:8px;
    width:90%;
    border-radius:15px;
    margin:auto;

}
.totalDiv{
    margin:10px 0px;
    border-top:1px solid gray;
    padding:10px;
    display:flex;
  
    
}

.totalDiv>div{
    margin:0px 10px ;
}
.totalDiv>div>p:first-child{
    font-family: "Montserrat";
    font-size:12px;
}

.totalDiv>Button{
    width:280px;
    height:48px;
    padding:15px;
    font-size: 16px;
    font-weight: bold;
    background-color: #42a2a2;
}



`;

export const Cart = () => {




  return (
    <>
      <CartWrapper>
        <div>
          <div className="headingDiv">
            <span>My Bag </span>6 item(s)
          </div>
          <div className="container">
            <div className="leftcont">
              <div className="truckDiv">
                <img
                  className="truckmove"
                  src="https://images.bewakoof.com/web/Red-truck.png"
                  alt="truck"
                />
                <span>Yay! You get FREE delivery on this order</span>
              </div>
              <div>
                <div className="productDiv">
                  <div>
                    <div>
                      <div>
                        Men's Blue Voyage Grpahic Printed Oversized T-Shirt
                      </div>
                      <div>
                        <span id="spfirst">₹499</span>
                        <span>₹1299</span>
                      </div>
                      <div id="savedprice">You saved ₹800!</div>
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
                            <MenuItem value={10}>S</MenuItem>
                            <MenuItem value={20}>M</MenuItem>
                            <MenuItem value={30}>L</MenuItem>
                            <MenuItem value={30}>XL</MenuItem>
                            <MenuItem value={30}>2XL</MenuItem>
                            <MenuItem value={30}>3XL</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl className="formcont">
                          <InputLabel id="demo-simple-select-label">
                           Qty
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>1</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                            <MenuItem value={30}>3</MenuItem>
                            <MenuItem value={10}>4</MenuItem>
                            <MenuItem value={20}>5</MenuItem>
                            <MenuItem value={30}>6</MenuItem>
                            <MenuItem value={10}>7</MenuItem>
                            <MenuItem value={20}>8</MenuItem>
                            <MenuItem value={30}>9</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div>
                      <img
                        className="imgtag"
                        src="https://images.bewakoof.com/t320/voyage-oversized-fit-t-shirt-520745-1658295402-1.jpg"
                        alt="invalid-image"
                      />
                    </div>
                  </div>
                  <div className="buttonSection">
                    <div>Remove</div>
                    <div>Move to Wishlist</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightcont">
             
                <div className="saveExtra">Save extra ₹230 with TriBe</div>
                <div className="simplehappy10">Whistles! Get extra 10% Cashback on prepaid orders above Rs.699. Coupon code - HAPPY10.</div>

                <div className="priceSection">
                <div className="coupenDiv"><span>Have a Coupon / Referral / Gift Card ?</span><span>Redeem </span></div>
                <div className="prsummary">Price Summary</div>
                <div className="summarysec">
                    <div><span>Total MRP (Incl. of taxes) </span><span>₹ 6644</span></div>
                    <div><span>Delivery Fee </span><span>FREE</span></div>
                    <div><span>Bag Discount </span><span>- ₹3800</span></div>
                    <div><span>Subtotal </span><span></span>₹ 2844</div>
                </div>
                <div className="saving">You are saving ₹ 3800 on this order</div>
       


                <div className="totalDiv">
                     <div><p>Total</p><p>₹ 2844</p></div>
                     <Button variant="contained">Continue</Button>
                </div>

                </div>
            
            </div>
          </div>
        </div>
      </CartWrapper>
    </>
  );
};
