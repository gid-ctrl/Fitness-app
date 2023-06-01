import React, { useState } from "react";

const ExerciseSelection = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleExerciseSelect = (exercise) => {
    setSelectedExercises((prevExercises) => [...prevExercises, exercise]);
  };

  return (
    <div>
      <h2>Select Exercises</h2>
      <ul>
        <li>
          <button onClick={() => handleExerciseSelect("Running")}>
            Running
          </button>
        </li>
        <li>
          <button onClick={() => handleExerciseSelect("Cycling")}>
            Cycling
          </button>
        </li>
      </ul>

      <h3>Selected Exercises:</h3>
      <ul>
        {selectedExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseSelection;
