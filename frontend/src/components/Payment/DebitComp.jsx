import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import styled from "styled-components";

const DebitWrapper = styled.div`
  font-size: 14px;
  font-family: "Montserrat";

  .form {
    .valid-cvv {
      display: flex;
      justify-content: space-between;
      margin: 10px 0px;

      .valid {
        width: 150px;
      }

      .cvv {
        width: 60px;
      }
    }

    .name {
      margin: 10px 0px 15px 0px;
    }

    .transactiontext {
      width: 200px;
      margin: 10px 0px;
    }

    .buttonpay{
        width:250px;
        background-color:#42a2a2;

    }
  
  }
`;

export const DebitComp = () => {
  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <>
      <DebitWrapper>
        <div></div>
        <form className="form">
          <div>
            <TextField
              variant="standard"
              className="cardnumber"
              InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
              label="Card Number"
            />
            <div className="valid-cvv">
              <TextField
                variant="standard"
                className="valid"
                InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                label="Valid(mm/yy)"
              />
              <TextField
                variant="standard"
                className="cvv"
                InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                label="CVV"
              />
            </div>
            <TextField
              variant="standard"
              className="name"
              InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
              label="Name On Card"
            />
          </div>
          <Checkbox className="checkbox" />
          <span>Save card details for later</span>
          <div className="transactiontext">
            This transaction you make is totally secure. We don't save your CVV
            number.
          </div>
          <Button type="submit" className='buttonpay' variant="contained">
            Pay 1098
          </Button>
        </form>
      </DebitWrapper>
    </>
  );
};
