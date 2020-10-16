import React, { useEffect, useState } from "react";

import styled from "styled-components";
import PageBanner from "../components/PageBanner";
import axios from "../axios";
import ProductCard from "../components/ProductCard";
import { Container } from "@material-ui/core";
const StyledMobile = styled.div``;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: center;
  @media ${(props) => props.theme.media.laptop} {
    grid-template-columns: auto;
  }
`;
function Mobile() {
  const [loadedMobiles, setLoadedMobiles] = useState([]);
  useEffect(() => {
    const fetchMobile = async () => {
      await axios.get("mobiles").then((res) => setLoadedMobiles(res.data));
    };
    fetchMobile();
  }, []);

  return (
    <StyledMobile>
      <PageBanner title="Mobiles" />
      <StyledContainer>
        {loadedMobiles.map((product, i) => {
          return <ProductCard product={product} key={i} />;
        })}
      </StyledContainer>
    </StyledMobile>
  );
}

export default Mobile;
