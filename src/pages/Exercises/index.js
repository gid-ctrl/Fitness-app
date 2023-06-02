import React, { useState } from "react";
import "../Exercises/Exercises.css";

const ExerciseSelection = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleExerciseSelect = (exercise) => {
    setSelectedExercises((prevExercises) => [...prevExercises, exercise]);
  };

  return (
    <div>
      <h2>Select Exercises</h2>
      <ul>
        <button
          className="exercise-button"
          onClick={() => handleExerciseSelect("Squats")}
        >
          Squats
        </button>
        <br />
        <br />
        <button
          className="exercise-button"
          onClick={() => handleExerciseSelect("Lateral Pull Down")}
        >
          Lateral Pull Down
        </button>
      </ul>

      <div className="selected-exercises">
        <h3>Selected Exercises:</h3>
        <ul>
          {selectedExercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseSelection;
