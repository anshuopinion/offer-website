import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import axios from "../axios";
import HomeCard from "../components/HomeCard";

const StyledHome = styled.div``;
const PageContainer = styled.div`
  margin-top: 2rem;
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
`;
function Home() {
  const [loadedPage, setLoadedPage] = useState([]);
  console.log(loadedPage);
  useEffect(() => {
    const fetchPage = async () => {
      await axios.get("pages").then((res) => setLoadedPage(res.data));
    };
    fetchPage();
  }, []);
  return (
    <StyledHome>
      {loadedPage && (
        <PageContainer>
          {loadedPage.map((page) => (
            <Link to={`${page.url}`}>
              <HomeCard page={page} />
            </Link>
          ))}
        </PageContainer>
      )}
    </StyledHome>
  );
}

export default Home;
