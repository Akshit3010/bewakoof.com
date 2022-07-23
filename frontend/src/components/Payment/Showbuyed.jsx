import React from 'react'
import styled from 'styled-components'

const Showbuyedwrapper = styled.div`
margin:20px 0px;
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

export const Showbuyed = ({imgUrl,title}) => {

  return (
   <>
   <Showbuyedwrapper>
    <div className='container'>
        <img  src={imgUrl} alt=''/>
        <span>{title} Estimated delivery by <span className='text-green-600'>29 July 2022</span></span>
        <hr/>
    </div>
   </Showbuyedwrapper>
   </>
  )
}
