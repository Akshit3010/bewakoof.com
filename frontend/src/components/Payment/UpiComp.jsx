import React from 'react'
import styled from 'styled-components'
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const UpiWrapper = styled.div`
 font-size: 14px;
 font-family:"Montserrat";

 .ptag{
    font-size: 10px;
    width:70%;
 }
 .checkbox{
    color:#42a2a2 ;
 }


 .buttontag ,.buttontag:hover{
    display: grid;
    margin:10px 0px;
   background-color:#42a2a2 ;
 }

`



export const UpiComp = () => {
  return (
    <>
 <UpiWrapper>
 <TextField variant="standard" className="cardnumber" InputLabelProps={{ style: {fontFamily:"Montserrat"} }}  label="UPI ID" />
 <div className='ptag'>UPI ID is in the format of 9999932832@bank or username@bank</div>
 <Checkbox className='checkbox' /><span>Save this UPI ID for future payments.</span>
<Button className='buttontag' type="submit"  variant="contained">Verify</Button>
</UpiWrapper>
    </>
  )
}
