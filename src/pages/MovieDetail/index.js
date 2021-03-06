import React, { useEffect, useState } from "react";
import { Container, CircularProgress, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { searchMovieById } from "../../redux/actions/search";
import { movieResult as movieResultSelector } from "../../redux/selectors";

export default ({ match }) => {
  const dispatch = useDispatch();
  const movieResult = useSelector((state) => movieResultSelector(state));

  console.log(movieResult);
  useEffect(() => {
    const movieId = match.params.id;
    if (!movieResult || (movieResult && movieResult.imdbID !== movieId)) {
      dispatch(searchMovieById({ movieId }));
    }
  });

  if (!movieResult) {
    return <CircularProgress size={100} color="primary" />;
  }

  return (
    <Container>
      <Typography variant="h3">{movieResult.Title}</Typography>
      <img src={movieResult.Poster} alt={movieResult.Title} />
      <Typography>
        <strong>Actores: </strong>
        {movieResult.Actors}
      </Typography>
      <Typography>
        <strong>Director: </strong>
        {movieResult.Director}
      </Typography>
      <Typography>
        <strong>Country: </strong>
        {movieResult.Country}
      </Typography>
      <Typography>
        <strong>Clasificación: </strong>
        {movieResult.Rated}
      </Typography>
      <Typography>
        <strong>Awards: </strong>
        {movieResult.Awards}
      </Typography>
      <Typography>
        <strong>Sinopsis: </strong>
        {movieResult.Plots}
      </Typography>
    </Container>
  );
};
