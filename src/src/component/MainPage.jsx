import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../Style.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MainPage() {
  const [selectedItem, setSelectedItem] = React.useState("");
  const [films, setFilms] = useState([]);
  
  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f6bb554383b810d88fb570d3cf4c92a6&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results);
      });
  }, []);
  return (
    <Box className="MainPage" sx={{ minWidth: 120 }}>
      <Box className="MainPageData">
        <h4>What's Popular</h4>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Popularity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Popularity"
            value={selectedItem}
            onChange={handleChange}
          >
            <MenuItem value={"Stream"}>Streaming</MenuItem>
            <MenuItem value={"TV"}>On TV</MenuItem>
            <MenuItem value={"Rent"}>For Rent</MenuItem>
            <MenuItem value={"Theater"}>In Theater</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="grid" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {films.map((film) => {
            return (
              <Grid container key={film.id} item xs={3} gap={2}>
                <Card sx={{ maxWidth: 345 }}>
                  <Link
                    className="link"
                    to={`moviedetail/${parseInt(film.id)}`}
                  >
                    <CardMedia
                      component="img"
                      width="100%"
                      height="350"
                      image="https://www.xtrafondos.com/en/descargar.php?id=7532&resolucion=2560x1440"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <p className="title">{film.title}</p>
                        <p className="releaseDate">{film.release_date}</p>
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
