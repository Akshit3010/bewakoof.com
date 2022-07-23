import React from 'react'
import styled from 'styled-components'


const Summarywrapper = styled.div`


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
    font-size:14px;
  
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





`

export const PageSummary = ({m,t,d}) => {





  return (
    <>
    <Summarywrapper>
      <div className='font-extrabold my-3'>Price Summary</div>
          <div className="summarysec">
                    <div><span>Total MRP (Incl. of taxes) </span><span>₹ {m}</span></div>
                    <div><span>Delivery Fee </span><span>FREE</span></div>
                    <div><span>Discount on MRP </span><span>- ₹{d}</span></div>
                    <hr className='my-3'/>
                    <div className='font-bold'><span >Subtotal </span><span></span>₹{t}</div>
                </div>
     </Summarywrapper>
    </>
  )
}
