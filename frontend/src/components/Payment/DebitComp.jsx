import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { orderbag } from "../../Redux/action";

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

    .buttonpay {
      width: 250px;
      background-color: #42a2a2;
      text-transform: none;
    }
  }
`;

export const DebitComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [cardvalue, setCardValue] = useState("");
  const { total } = useSelector((state) => state.reducer);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({ ...formData, ["Card Number"]: cardvalue });

    console.log(formData);
    dispatch(orderbag(id));

    navigate("/order_successful");
  };

  return (
    <>
      <DebitWrapper>
        <div></div>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <TextField
              variant="standard"
              className="cardnumber"
              name="Card Number"
              inputProps={{ maxLength: 19 }}
              InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
              label="Card Number"
              value={cardvalue}
              onChange={(e) => {
                setCardValue(
                  (e.target.value = e.target.value
                    .replace(/[^\dA-Z]/g, "")
                    .replace(/(.{4})/g, "$1 ")
                    .trim())
                );
              }}
            />
            <div className="valid-cvv">
              <TextField
                variant="standard"
                className="valid"
                name="Validity"
                InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                label="Valid(mm/yy)"
                onChange={handleChange}
              />
              <TextField
                variant="standard"
                className="cvv"
                name="CVV"
                InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                label="CVV"
                onChange={handleChange}
              />
            </div>
            <TextField
              variant="standard"
              className="name"
              name="name"
              InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
              label="Name On Card"
              onChange={handleChange}
            />
          </div>
          <Checkbox className="checkbox" />
          <span>Save card details for later</span>
          <div className="transactiontext">
            This transaction you make is totally secure. We don't save your CVV
            number.
          </div>
          <Button type="submit" className="buttonpay" variant="contained">
            Pay {total}
          </Button>
        </form>
      </DebitWrapper>
    </>
  );
};
