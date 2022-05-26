import { NavBar } from "./NavBar";
import { WelcomeTheme } from "./WelcomeTheme";
import Container from "@mui/material/Container";
import "../Style.css";
import MainPage from "./MainPage";

export function MainComponent() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <WelcomeTheme />
        <MainPage />
      </Container>
    </>
  );
}
