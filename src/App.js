import React from "react";
import NavBar from "./components/navbar";
import Home from "./pages/homepage";
import "./styles/style.css";
import ExerciseSelection from "./pages/exercises";
const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Home />
        {<ExerciseSelection />}
      </main>
    </div>
  );
};

export default App;
