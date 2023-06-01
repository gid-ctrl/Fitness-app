import React, { useEffect, useState } from "react";
import { exerciseSearch, fetchData } from "../../service/fetchData";
import "../Navbar/Navbar.css";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseSearch
      );
      const exercisesSearched = exercisesData.filter(
        (exercise) =>
          exercise.target.toLowerCase().includes(search) ||
          exercise.name.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(exercisesSearched);
    }
  };
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Exercise Selection</li>
        <li className="navbar-item">Workout Tracking</li>
      </ul>
      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search workouts"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <button className="sign-up-button">Sign Up</button>
    </nav>
  );
};
export default NavBar;
