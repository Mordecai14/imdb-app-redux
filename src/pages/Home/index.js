import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Card,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";

import { MovieIcon } from "../../icons";
import styles from "./style";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleCleanTextClick = (e) => {
    setSearchText("");
  };
  const handleSearchTextClick = (e) => {
    history.push(`/results?movieName=${searchText}`);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          className={classes.textFieldSearch}
          onChange={handleSearchTextChange}
        />
        <Grid className={classes.buttonscontainer}>
          <Button
            variant="contained"
            className={classes.clearButton}
            size="small"
            onClick={handleCleanTextClick}
          >
            Limpiar
          </Button>
          <Button
            variant="contained"
            className={classes.searchButton}
            color="primary"
            size="large"
            onClick={handleSearchTextClick}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
