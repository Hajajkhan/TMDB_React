import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";

import "../Style.css";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export function NavBar() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [topFilms, setTopFilms] = useState([]);
  const [searchedMovies, setsearchedMovies] = useState("z");
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f6bb554383b810d88fb570d3cf4c92a6&language=en-US&query=${searchedMovies}&page=1&include_adult=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setTopFilms(data.results);
      });
  }, [searchedMovies]);

  return (
    <div className="mainNavBar">
      <AppBar position="static" color="primary" enableColorOnDark>
        <Box className="navBarInner">
          <Box className="left">
            <h1>TMDB</h1>
            <ul>
              <li>Movies</li>
              <li>TV Shows</li>
              <li>People</li>
              <li>More</li>
            </ul>
          </Box>
          <Box className="right">
            <Autocomplete
              id="asynchronous-demo"
              sx={{ width: 300 }}
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              isOptionEqualToValue={(option, value) =>
                option.title === value.title
              }
              getOptionLabel={(option) => option.title}
              options={options}
              loading={loading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Movies"
                  value={searchedMovies}
                  onChange={(e) => setsearchedMovies(e.target.value)}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
            <SearchIcon id="search" />
          </Box>
        </Box>
      </AppBar>
    </div>
  );
}
