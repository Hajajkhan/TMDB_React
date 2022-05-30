import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function SimilarMovies(props) {
  return (
    <div className="similarMovies">
      <h1>Similar Movies</h1>
      <Box className="grid" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{flexWrap:'nowrap', overflowX:"scroll" }}>
          {props.similarMovies.map((film) => {
            return (
              <Grid container key={film.id} item xs={2} gap={2}>
                <Card sx={{ width: 345 }}>
                  <Link
                    className="link"
                    to={`/moviedetail/${parseInt(film.id)}`}
                  >
                    <CardMedia
                      component="img"
                      width="150px"
                      height="150px"
                      image="https://wallpapercave.com/wp/wp5053172.jpg"
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
    </div>
  );
}
