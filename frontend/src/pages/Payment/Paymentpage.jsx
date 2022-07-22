import React from 'react'
import { Payment } from '../../components/Payment/Payment'
import styled from 'styled-components'

const Paywrapper = styled.div`
width:80%;
margin:auto;
margin-top:50px;
font-size: 14px;
font-family:"Montserrat";
.titletag{
  font-weight: bold;
  margin:10px;
}
.paymentsec{
  width:650px;
  height:420px;
  border:1px solid gray;

}

`
export const Paymentpage = () => {
  return (
    <>
    <Paywrapper>
      <div>
        <div className='titletag'>Choose your payment method</div>
        <div className='paymentsec'>
          <Payment/>
        </div>
      </div>
      <div>
      <div>Delivering order to Naved Khan Madarse wali gali, Near Noori Masjid,Delapeer bareilly, Bareilly, Uttar Pradesh, 243122</div>
       <hr/>
      </div>
      </Paywrapper>
    </>
  )
}
