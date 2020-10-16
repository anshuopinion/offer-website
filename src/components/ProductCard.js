import { Button, Card } from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 35rem;
  height: 450px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.media.tablet} {
    width: 30rem;
    height: 25rem;
  }
  @media ${(props) => props.theme.media.mobileL} {
    width: 20rem;
    height: 23rem;
  }
  @media ${(props) => props.theme.media.mobileS} {
    width: 18rem;
    height: 20rem;
  }
`;
const Title = styled.h3`
  font-size: 1rem;
  text-transform: capitalize;
`;
const Description = styled.p`
  font-size: 0.8rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.color.mainDark};
`;
const Range = styled.div`
  text-transform: capitalize;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.color.main};
  padding: 0.2rem 1rem;
`;
const BuyBtn = styled(Button)`
  background-color: ${(props) => props.theme.color.mainLight};
  &:hover {
    background-color: ${(props) => props.theme.color.mainDark};
    color: #fff;
  }
  @media ${(props) => props.theme.media.mobileL} {
    width: 6rem;
    height: 1.4rem;
  }
`;
const ImageContainer = styled.div`
  overflow: hidden;
  width: 32rem;
  height: 16rem;
  background-size: cover;
  background-position: center;

  @media ${(props) => props.theme.media.mobileL} {
    width: 22rem;
    height: 27rem;
  }
`;
const Banner = styled.img`
  width: 32rem;
  height: auto;
  align-self: center;
  background-position: center;
  @media ${(props) => props.theme.media.mobileL} {
    width: 22rem;
  }
`;
function ProductCard({ product }) {
  console.log(product.buy);

  return (
    <StyledCard>
      <Title>{product.title}</Title>
      <ImageContainer>
        <Banner
          src={`${process.env.REACT_APP_SERVER_URL + product.banner.url}`}
          alt={`${product.title}`}
        />
      </ImageContainer>
      <Description>
        <Link to={`/mobile/${product.id}`}>Click Here For key Features</Link>
      </Description>
      <Range>{product.range}</Range>
      <a href={`${product.buy}`}>
        <BuyBtn>BUY NOW</BuyBtn>
      </a>
    </StyledCard>
  );
}

export default ProductCard;
