import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    let updatedGreeting = "";

    if (currentHour >= 5 && currentHour < 12) {
      updatedGreeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      updatedGreeting = "Good Afternoon";
    } else {
      updatedGreeting = "Good Evening";
    }

    setGreeting(updatedGreeting);
  }, []);

  return <h1>{greeting}! Welcome back! </h1>;
};

export default Greeting;
