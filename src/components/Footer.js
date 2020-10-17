import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #000;
  color: #fff;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items:center;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
function Footer() {
  return (
    <StyledFooter>
      <span>Anshuopinion &copy; 2020</span>
      <span>
        <a href="https://telegram.me/anshusopinion">Join Telegram Channel</a>
      </span>
    </StyledFooter>
  );
}

export default Footer;
