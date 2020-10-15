import { Card } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const StyledPageBanner = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 100px;

  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4rem;
    text-align: center;
  }
`;

function PageBanner({ title }) {
  return (
    <StyledPageBanner>
      <h1>Best offers on {title}</h1>
    </StyledPageBanner>
  );
}

export default PageBanner;
