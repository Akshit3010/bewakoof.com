import React from 'react'
import { Payment } from '../../components/Payment/Payment'
import styled from 'styled-components'

const Paywrapper = styled.div`
width:80%;
margin:auto;
margin-top:50px;


`
export const Paymentpage = () => {
  return (
    <>
    <Paywrapper>
      <div>
        <div>Choose your payment method</div>
        <div>
          <Payment/>
        </div>
      </div>
      <div></div>
      </Paywrapper>
    </>
  )
}
