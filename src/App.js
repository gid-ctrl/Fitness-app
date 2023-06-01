import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Homepage";
import "./styles/style.css";
import ExerciseSelection from "./pages/Exercises";
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
