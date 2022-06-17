import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { SearchResultContextProvider } from "./contexts/SearchResultContext";
import { ExerciseDetailContextProvider } from "./contexts/ExerciseDetailContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchResultContextProvider>
      <ExerciseDetailContextProvider>
        <Router>
          <App />
        </Router>
      </ExerciseDetailContextProvider>
    </SearchResultContextProvider>
  </React.StrictMode>
);
