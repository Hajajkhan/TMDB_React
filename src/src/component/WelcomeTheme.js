import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../Style.css";



export function WelcomeTheme() {
  return (
    <div className="MainData">
      <Box className="MainDataInner">
        <h1>
          Welcome.
          <br />
          Millions of movies, TV shows and people to discover. Explore now.
        </h1>
      </Box>
      <Box className="textField">
        <TextField
          InputProps={{
            style: {
              color: "white",
              height: "50px",
              width: "500px",
              backgroundColor: "white",
            },
          }}
          label="Search a movie, TV show, person..."
          variant="outlined"
        />
        <Button>Search</Button>
      </Box>
    </div>
  );
}
