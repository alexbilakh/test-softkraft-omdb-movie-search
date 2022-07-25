import { useEffect, useState } from "react";
import styled, { StyledComponent } from "styled-components";
import { Movie } from "../@types/movie";
import SearchBar from "./SearchBar";
import StatusBar from "./StatusBar";
import MovieList from "./MovieList";
import useInfiniteScroll from "../utils/hooks/useInfiniteScroll";
import axios from "axios";

const MovieSearchContainer = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const setFetching = useInfiniteScroll(loadMore);

  useEffect(() => {
    handleSearch(page);
  }, [searchText]);

  // handle movies
  async function handleSearch(pageNum: number) {
    if (!searchText) {
      clearResult();
      setFetching(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axios
        .get(`/`, {
          params: {
            apikey: process.env.REACT_APP_OMDB_API_KEY,
            type: "movie",
            s: searchText,
            page: pageNum,
          },
        })
        .then((res) => res.data);

      if (response?.Response === "True") {
        setMovieList((prev) => [...prev, ...response.Search]);
        setTotalCount(response.totalResults as number);
        setPage(pageNum);
      } else {
        setErrorMessage(response.Error);
      }
    } catch (err) {
      console.log(err);
      setErrorMessage(
        "Failed to fetch data. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
      setFetching(false);
    }
  }

  // load more movies
  function loadMore() {
    if (movieList.length === totalCount) {
      setFetching(false);
      return;
    }
    handleSearch(page + 1);
  }

  // handle search-text change event
  function handleSearchTextChange(searchText: string): void {
    setSearchText(searchText);
  }

  // clear search-result
  function clearResult() {
    setMovieList([]);
    setTotalCount(0);
  }

  return (
    <StyledMoviesContainer>
      <SearchBar onSearchTextChanged={handleSearchTextChange} />

      <StatusBar errorMessage={errorMessage} totalCount={totalCount} />

      <MovieList movieList={movieList} />

      <StyledLoadingBar visible={isLoading}>Loading ...</StyledLoadingBar>
    </StyledMoviesContainer>
  );
};

export default MovieSearchContainer;

// ====== Start styled components ======
const StyledMoviesContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 664px) {
    max-width: 300px;
  }

  @media (max-width: 989px) {
    max-width: 625px;
  }

  @media (max-width: 1314px) {
    max-width: 950px;
  }

  @media (max-width: 1639px) {
    max-width: 1275px;
  }
`;

const StyledLoadingBar: StyledComponent<
  "div",
  any,
  { visible: boolean }
> = styled.div`
  font-size: 18pt;
  text-align: center;
  margin: 16px 0px;
  font-style: italic;
  visibility: ${(props: any) => (props.visible ? "visible" : "hidden")};
`;
// ====== End styled components ======
