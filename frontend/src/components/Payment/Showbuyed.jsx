import React from 'react'
import styled from 'styled-components'

const Showbuyedwrapper = styled.div`

.container{
    display:flex;
    img{
        height: 36px;
        width:36px;
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
