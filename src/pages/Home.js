import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import ErrorModal from "../components/ErrorModal";
import HomeCard from "../components/HomeCard";
import PageBanner from "../components/PageBanner";
import Spinner from "../components/Spinner";
import { useHttpClient } from "../hooks/http-hooks";

const StyledHome = styled.div``;

const PageContainer = styled.div`
  margin-top: 2rem;
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  @media ${(props) => props.theme.media.mobileL} {
    grid-template-columns: auto;
    grid-column-gap: 0;
  } ;
`;
function Home() {
  const { error, sendRequest, loading, clearError } = useHttpClient();

  const [loadedPage, setLoadedPage] = useState([]);
  console.log(loadedPage);
  useEffect(() => {
    const fetchPage = async () => {
      await sendRequest("pages", "get").then((res) => setLoadedPage(res.data));
    };
    fetchPage();
  }, [sendRequest]);
  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      {loading ? (
        <Spinner fullPage />
      ) : (
        <StyledHome>
          <PageBanner src="" />
          {loadedPage && (
            <PageContainer>
              {loadedPage.map((page) => (
                <Link to={`${page.url}`} key={page.title}>
                  <HomeCard page={page} />
                </Link>
              ))}
            </PageContainer>
          )}
        </StyledHome>
      )}
    </>
  );
}

export default Home;
