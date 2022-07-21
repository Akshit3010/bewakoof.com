import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../components/Cart'

export const MainRoutes = () => {
  return (
   
   <>
    <Routes>
    <Route path='/cart' element={<Cart/>} />
   </Routes>
   </>
  )
}
