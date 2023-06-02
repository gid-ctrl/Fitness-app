import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Homepage";
import "./styles/style.css";
import ExerciseSelection from "./pages/Exercises";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/exercise-selection" element={<ExerciseSelection />} />
      </Routes>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
