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
export const NetComp = () => {
  return (
    <Walletwrapper>
    <fieldset id='group1'>
       <div className='line'>
       <img  src="https://images.bewakoof.com/web/icici-1556185960.png" />
            <span>ICICI</span>
            <input type="radio" name='group1' />
       </div>
        <hr/>
       <div className='line'>
           <img src="https://images.bewakoof.com/web/axis-1556185962.png"  />
            <span>Axis</span>
            <input type="radio"  name='group1'  />
       </div>
        <hr/>
       <div className='line'>
           <img src="https://images.bewakoof.com/web/sbi-1556185961.png"/>
            <span>SBI</span>
            <input type="radio"  name='group1' />
       </div>
        <hr/>
       <div className='line'>
           <img src="https://images.bewakoof.com/web/hdfc-1556185961.png" />
            <span>HDFC</span>
            <input type="radio"  name='group1' />
       </div>
        <hr/>   
        <div className='line'>
           <img src="https://images.bewakoof.com/web/kotak-1556185967.png" />
            <span>KOTAK</span>
            <input type="radio"  name='group1' />
       </div>
        <hr/>  
             
     </fieldset>
     </Walletwrapper>
  )
}
