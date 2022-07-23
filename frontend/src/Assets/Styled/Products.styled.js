import styled, { keyframes } from "styled-components";

const fadeInOpacity = keyframes`
0% {
    opacity:.5
}
100% {
   opacity:1
}
`;

export const ProductHeader = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap");

  font-family: "Montserrat", sans-serif;
`;

export const ProdSection = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap");
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-columns: 285px minmax(0, 1fr);
  grid-template-rows: 1fr;
  column-gap: 30px;
  background-color: #fff;
  padding: 16px 40px 40px;
  max-width: 1305px;
  margin: 0 auto;
  @media all and (max-width: 968px) {
    padding: 1rem 0;
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ProdFilterDiv = styled.aside`
  position: sticky;
  top: 24%;
  left: 0;
  align-self: start;
  height: 100vh;

  @media all and (max-width: 968px) {
    display: none;
  }
`;

export const ProdGridDiv = styled.aside`
  display: grid;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 3rem;
  @media all and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProdImg = styled.img`
  transition: transform 0.4s ease;
  &:hover {
    transform: scale(1.01);
    animation-name: ${fadeInOpacity};
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-duration: 0.7s;
  }
`;
