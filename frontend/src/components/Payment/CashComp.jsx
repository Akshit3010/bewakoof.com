import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';

const Cashwrapper = styled.div`
 font-size: 14px;
 font-family:"Montserrat";


.buttontag ,.buttontag:hover{
        display: grid;
        margin:10px 0px;
       background-color:#42a2a2 ;
     }



`

export const CashComp = () => {





  return (

   <>
   <Cashwrapper>
    <div>Cash Collection Charges: Costs ₹ 35 Extra</div>
    <Button className='buttontag' type="submit"  variant="contained">Verify</Button>
    </Cashwrapper>
   </>
  )
}
