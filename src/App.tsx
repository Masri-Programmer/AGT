import { Routes, Route } from "react-router-dom";
import { Navbar, Home, FooterComponent } from "./imports";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "samsung",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterComponent />
    </ThemeProvider>
  );
}

export default App;
