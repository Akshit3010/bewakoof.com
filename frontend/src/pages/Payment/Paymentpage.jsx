import React from 'react'
import { Payment } from '../../components/Payment/Payment'

export const Paymentpage = () => {
  return (
    <>
      <div>
        <div>Choose your payment method</div>
        <div>
          <Payment/>
        </div>
      </div>
      <div></div>
    </>
  )
}
