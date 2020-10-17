import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const StyledHomeCard = styled(Box)`
  width: 20rem;
  height: 15rem;
  .image-conatiner {
    img {
      width: 20rem;
      height: 12rem;
      object-fit: cover;
    }
  }
  h3 {
    text-transform: capitalize;
    text-align: center;
    font-size: 2rem;
    margin-top: 5px;
    font-weight: 500;
  }
`;
function HomeCard({ page }) {
  console.log(page);
  return (
    <StyledHomeCard boxShadow={3}>
      <div className="image-conatiner">
        <img src={`${page.banner.formats.small.url}`} alt={`${page.title}`} />
      </div>
      <h3>{`${page.title} Offers`}</h3>
    </StyledHomeCard>
  );
}

export default HomeCard;
