import React from "react";
import Contact from "./Contacts";
import GitHub from "./GitHub";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const AllRoutes = () => {
  return (
    <>
      <div id="home" style={{padding:"0px"}}>
        <Home />
      </div>
      <div id="github-calander" style={{padding:"0px"}}>
        <GitHub />
      </div>
      <div id="skills" style={{padding:"0px"}}>
        <Skills />
      </div>
      <div id="projects" style={{padding:"0px"}}>
        <Projects />
      </div>
      <div id="contact" style={{padding:"0px"}}>
        <Contact />
      </div>
    </>
  );
};

export default AllRoutes;
