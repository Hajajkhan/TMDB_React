import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/system";
import { CardContent, Card } from "@mui/material";
import SimilarMovies from "./SimilarMovies";
import MovieReviews from "./MovieReviews";
import Rating from '@mui/material/Rating';
import "../Style.css";

export default function MovieDetail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f6bb554383b810d88fb570d3cf4c92a6&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f6bb554383b810d88fb570d3cf4c92a6&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.results);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=f6bb554383b810d88fb570d3cf4c92a6&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setSimilarMovies(data.results);
      });
  }, [id]);

  if (!movies) return <div>Loading movies...</div>;

  return (
    <Box className="mainDetail">
      <Box className="detail">
        <h1>{movies.title}</h1>
        <Container maxWidth="lg">
          <Box className="detailInner">
            <Box className="detailleft">
              <img src="https://play-lh.googleusercontent.com/CK40fpG7eLEMMtj2MIin7NVwjuaWqE2BRWA6W29TxkloldPPz8MRfaSFD30cW5TPAA" />
            </Box>
            <Box className="detailright">
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <span>
                    Releasing Date: <b>{movies.release_date}</b>
                  </span>
                  <h4>Overview:</h4>
                  <q>{movies.overview}</q>
                  <h4>Rating:</h4>
                  <Rating name="read-only" value={movies.vote_average/2} readOnly />
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
          <SimilarMovies similarMovies={similarMovies} />
          <MovieReviews reviews={reviews} />
      </Box>
    </Box>
  );
}
