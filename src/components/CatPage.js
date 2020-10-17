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
function CatPage({ type }) {
  const [loadedProducts, setLoadedProducts] = useState([]);
  useEffect(() => {
    const fetchMobile = async () => {
      await axios.get(`${type}s`).then((res) => setLoadedProducts(res.data));
    };
    fetchMobile();
  }, [type]);

  return (
    <StyledMobile>
      <PageBanner title={`${type}s`} />
      <StyledContainer>
        {loadedProducts.map((product, i) => {
          return <ProductCard type={type} product={product} key={i} />;
        })}
      </StyledContainer>
    </StyledMobile>
  );
}

export default CatPage;
