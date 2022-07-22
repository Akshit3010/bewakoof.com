import React from 'react'
import styled from 'styled-components'

const Showbuyedwrapper = styled.div`

.container{
    display:flex;
   font-size: 14px;
  font-family:"Montserrat";
    
    img{
        height: 50px;
        width:50px;
        margin-right:10px;
    }
}


`


export const Showbuyed = () => {



  return (
   <>
<Showbuyedwrapper>
    <div className='container'>
        <img  src='https://images.bewakoof.com/t320/women-s-red-minion-s-bello-graphic-printed-plus-size-boyfriend-t-shirt-480068-1656149137-1.jpg' alt=''/>
        <span>Women's Red Minion'S Bello Graphic Printed Plus Size Boyfriend T-shirtWomen's Red Minion'S Bello Graphic Printed Plus Size Boyfriend T-shirt Estimated delivery by 29 July 2022</span>
        <hr/>
    </div>
</Showbuyedwrapper>
   </>
  )
}
