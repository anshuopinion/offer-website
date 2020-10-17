import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import axios from "../axios";

const StyledProductPage = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1rem;
  text-transform: capitalize;
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  display: flex;
  border: 1px solid #000;
  text-align: start;
  line-height: 2rem;
  margin: 1rem 0;
  padding: 1rem;
`;
const Range = styled.div`
  text-transform: capitalize;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.color.main};
  padding: 0.3rem 1rem;
  border-radius: 0.3rem;
`;
const BuyBtn = styled(Button)`
  background-color: ${(props) => props.theme.color.mainLight};
  &:hover {
    background-color: ${(props) => props.theme.color.mainDark};
    color: #fff;
  }
  padding: 1rem 2rem;
  align-self: flex-end;
  font-size: 2rem;
  width: 100%;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 1rem;
    padding: 0.12rem;
  }
  @media ${(props) => props.theme.media.mobileM} {
    font-size: 0.7rem;
  } ;
`;

const ImageContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;
const Banner = styled.img`
  width: 100%;

  background-position: center;
`;
function ProductPage({ match, type }) {
  //   console.log(match);

  const [loadedProduct, setLoadedProduct] = useState();
  useEffect(() => {
    const fetchMobile = async () => {
      await axios
        .get(`${type}/${match.params.id}`)
        .then((res) => setLoadedProduct(res.data));
    };
    fetchMobile();
  }, [match, type]);
  return (
    <StyledProductPage>
      {loadedProduct && (
        <>
          <Title>{loadedProduct.title}</Title>
          <ImageContainer>
            <Banner
              src={`${loadedProduct.banner.formats.large.url}`}
              alt={`${loadedProduct.title}`}
            />
          </ImageContainer>
          <a href={`${loadedProduct.buy}`}>
            <BuyBtn>BUY NOW</BuyBtn>
          </a>
          <StyledReactMarkdown
            source={loadedProduct.description}
            escapeHtml={false}
          />
          <Range>{loadedProduct.range}</Range>{" "}
        </>
      )}
    </StyledProductPage>
  );
}

export default withRouter(ProductPage);
