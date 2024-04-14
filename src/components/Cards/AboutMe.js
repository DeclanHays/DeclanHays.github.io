import React from "react";
import CardTempate from "../CardTemplate";

function AboutMe() {
  let pic = "https://via.placeholder.com/100"
  let desc = "I am currently in my senior year at the University of Maryland, College Park, pursuing my B.S. in Computer Science. ";
  desc += "During summer of 2023, I gained experience in front-end software engineering through my internship at Veradigm. ";
  desc += "My professional interests are in front-end, back-end, and full-stack software development, as well as data science and A.I. ";
  desc += "Previously, I have worked at a boat rental company where I fulfilled duties as a captain, customer service rep, and performed maintenance on the boats."

  let t = "About Me";

  return (
    <CardTempate
      pictureSource={pic}
      title={t}
      description={desc}
    ></CardTempate>
  );
}

export default AboutMe;