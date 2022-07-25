import { Movie } from "../@types/movie";
import React from "react";
import styled from "styled-components";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <StyledMovieCardContainer>
      <StyledThumbnailContainer>
        <StyledThumbnail src={movie.Poster} alt={movie.Title} />
      </StyledThumbnailContainer>
      <StyledMovieTitle>
        {movie.Title} (#{movie.Year})
      </StyledMovieTitle>
    </StyledMovieCardContainer>
  );
};

export default React.memo(MovieCard);

// ====== Start styled components ======
const StyledMovieCardContainer = styled.div`
  width: 300px;
`;

const StyledThumbnailContainer = styled.div`
  height: 420px;
  text-align: center;
  box-shadow: 0 5px 40px 0 rgb(0 0 0 / 50%);
`;

const StyledThumbnail = styled.img`
  height: 100%;
`;

const StyledMovieTitle = styled.h6`
  font-size: 14pt;
  font-weight: normal;
  text-align: center;
  margin: 10px 0 0;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @supports (-webkit-line-clamp: 3) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
// ====== End styled components ======
