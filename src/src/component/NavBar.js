import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Style.css";

export function NavBar() {
  const [topFilms, setTopFilms] = useState([]);
  const [searchedMovies, setsearchedMovies] = useState("z");
  const navigation = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f6bb554383b810d88fb570d3cf4c92a6&language=en-US&query=${searchedMovies}&page=1&include_adult=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setTopFilms(data.results);
      });
  }, [searchedMovies]);

  const onSelectFunction = (data) => {
    navigation(`moviedetail/${data.id}`);
  };

  return (
    <div className="mainNavBar">
      <AppBar position="static" color="primary" enableColorOnDark>
        <Box className="navBarInner">
          <Box className="left">
            <Link to={"/"}>
              <h1>TMDB</h1>
            </Link>
            <ul>
              <li>Movies</li>
              <li>TV Shows</li>
              <li>People</li>
              <li>More</li>
            </ul>
          </Box>
          <Box className="right">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={topFilms}
              getOptionLabel={(option) => option.title}
              onChange={(event, value) => onSelectFunction(value)}
              renderInput={(params) => (
                <TextField
                  value={searchedMovies}
                  onChange={(e) => setsearchedMovies(e.target.value)}
                  {...params}
                  label="Movie"
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
