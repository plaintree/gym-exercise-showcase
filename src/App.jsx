import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Box, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ExerciseDetailPage from "./pages/ExerciseDetailPage";
import Footer from "./components/Footer";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/exercise/:id' element={<ExerciseDetailPage />} />
        </Routes>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
