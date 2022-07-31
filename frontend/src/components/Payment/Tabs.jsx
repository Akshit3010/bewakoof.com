import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0px;
  padding: 0px;
  /* border:1px solid red; */
  align-self: flex-start;
  /* background-color: #f7f7f7; */
  /* color:#f7f7f7; */
  .mainDiv {
    display: flex;
    /* padding:25px 25px 25px 21px; */

    img {
      opacity: 1;
    }

    .spanTag {
      font-size: 14px;
      font-family: "Montserrat";
      font-weight: bold;
      margin: 0px 0px 0px 12px;
    }
  }
`;

export const DebitCard = () => {
  return (
    <>
      <Wrapper>
        <div className="mainDiv">
          <img
            width="24"
            height="24"
            src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg"
            alt="po"
          />
          <span className="spanTag">Debit/Credit Card</span>
        </div>
      </Wrapper>
    </>
  );
};

export const Wallet = () => {
  return (
    <>
      <Wrapper>
        <div className="mainDiv">
          <img
            width="24"
            height="24"
            src="https://images.bewakoof.com/web/Group-1645705428.png"
            alt="poimage"
          />
          <span className="spanTag">Wallet</span>
        </div>
      </Wrapper>
    </>
  );
};

export const UPI = () => {
  return (
    <>
      <Wrapper>
        <div className="mainDiv">
          <img
            width="24"
            height="24"
            src="https://images.bewakoof.com/web/upi-icon-1645705429.png"
            alt="poimage"
          />
          <span className="spanTag">UPI</span>
        </div>
      </Wrapper>
    </>
  );
};
export const Net = () => {
  return (
    <>
      <Wrapper>
        <div className="mainDiv">
          <img
            width="24"
            height="24"
            src="https://images.bewakoof.com/web/nb-icon-1645705428.png"
            alt="poimage"
          />
          <span className="spanTag">Net banking</span>
        </div>
      </Wrapper>
    </>
  );
};

export const Cash = () => {
  return (
    <>
      <Wrapper>
        <div className="mainDiv">
          <img
            width="24"
            height="24"
            src="https://images.bewakoof.com/web/cod-icon-1645705427.png"
            alt="poimage"
          />
          <span className="spanTag">Cash on Delivery</span>
        </div>
      </Wrapper>
    </>
  );
};
