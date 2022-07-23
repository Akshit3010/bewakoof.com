import React from 'react'
import styled from 'styled-components'

const Walletwrapper = styled.div`
.line{

   width:200px;
   font-size: 14px;
  font-family:"Montserrat";
  display: flex;
  justify-content:space-around;
  align-items: center;
  margin: 10px 0px;
    img{
        width:40px;
        height:40px;
    }
}

`



export const WalletComp = () => {
  return (
    <>
    <Walletwrapper>
     <fieldset id='group1'>
        <div className='line'>
        <img  src="https://images.bewakoof.com/web/paytm-round-v1.png" />
             <span>Paytm wallet</span>
             <input type="radio" name='group1' />
        </div>
         <hr/>
        <div className='line'>
            <img src="https://images.bewakoof.com/web/ic-phonepe-3x-payment-v1.png"  />
             <span>Phone Pe</span>
             <input type="radio"  name='group1'  />
        </div>
         <hr/>
        <div className='line'>
            <img src="https://images.bewakoof.com/web/ic-mobikwik-3x-payment-v1.png"/>
             <span>Mobikwik</span>
             <input type="radio"  name='group1' />
        </div>
         <hr/>
        <div className='line'>
            <img src="https://images.bewakoof.com/web/ic-freecharge-3x-payment-v1.png" />
             <span>Freecharge</span>
             <input type="radio"  name='group1' />
        </div>
         <hr/>        
      </fieldset>
      </Walletwrapper>

    
    </>
  )
}
