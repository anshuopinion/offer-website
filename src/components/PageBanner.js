import React from "react";
import styled from "styled-components";

const StyledPageBanner = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 10rem;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4rem;
    text-align: center;
    text-transform: uppercase;
  }
  @media ${(props) => props.theme.media.tablet} {
    height: 6rem;
    h1 {
      font-size: 3rem;
    }
  }
  @media ${(props) => props.theme.media.mobileL} {
    height: 4rem;
    h1 {
      font-size: 1.4rem;
    }
  } ;
`;

function PageBanner({ title }) {
  return (
    <StyledPageBanner>
      <h1>Best offers on {title}</h1>
    </StyledPageBanner>
  );
}

export default PageBanner;
