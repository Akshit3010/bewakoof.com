import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserbag, orderbag } from '../../Redux/action';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { total } = useSelector((state) => state.reducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(orderbag(id));
    dispatch(getUserbag(id));
    navigate("/order_successful");
  };
  return (

    <>
      <Cashwrapper>
        <div>Cash Collection Charges: Costs ₹ 35 Extra</div>
        <Button className='buttontag' type="submit" onClick={handleSubmit} variant="contained">Pay {total}</Button>
      </Cashwrapper>
    </>
  )
}
