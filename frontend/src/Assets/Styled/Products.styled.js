import styled from "styled-components";

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
  top: 0;
  left: 0;
  align-self: start;
  height: 100vh;

  @media all and (max-width: 968px) {
    display: none;
  }
`;
