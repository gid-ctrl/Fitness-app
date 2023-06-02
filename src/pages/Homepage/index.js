import React from "react";
import Greeting from "../../components/Greeting";
import "../Homepage/Homepage.css";
import gymImage from "../../Images/gym.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <Greeting />
        <h3 className="welcome-text">Welcome Back</h3>
        <br />
        <div className="home-container">
          <p className="sweat-text">Sweat, Succeed</p>
          <p className="smile-text">and Smile</p>
          <p className="text">
            <br />
            Find the most effective exercises to benefit your gains
          </p>{" "}
          <div className="image-container">
            <img src={gymImage} alt="Gym" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
