import React from "react";
import Contact from "./Contacts";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const AllRoutes = () => {
  return (
    <>
      <Home />
      <Skills />

      <Projects />
      <Contact />
    </>
  );
};

export default AllRoutes;
