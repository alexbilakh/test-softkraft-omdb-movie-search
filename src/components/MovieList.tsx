import React from "react";
import styled from "styled-components";
import { Movie } from "../@types/movie";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movieList: Movie[];
}

const MovieList = ({ movieList }: MovieListProps) => {
  return (
    <StyledMovieListContainer>
      {movieList.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </StyledMovieListContainer>
  );
};

export default React.memo(MovieList);

// ====== Start styled components ======
const StyledMovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 25px;
  margin-top: 20px;
`;
// ====== End styled components ======
