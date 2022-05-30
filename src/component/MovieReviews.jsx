import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Grid } from "@mui/material";

export default function MovieReviews(props) {
  console.log("rev", props.reviews)
  return (
    <div class="similarMovies">
      <h1>Reviews</h1> 
      <Grid xs={8} spacing={4}>
        {props.reviews.map((review) => {
          return (
            <Grid className="grid" >
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <p className="title">{review.author}</p>
                    <p className="releaseDate">{review.content}</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
