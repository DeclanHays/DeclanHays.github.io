import React from "react";
import CardTempate from "../CardTemplate";

function Education() {
  let pic = "https://via.placeholder.com/100"
  let t = "Education";
  let desc = "I am currently in my senior year at the University of Maryland, College Park, pursuing my B.S. in Computer Science.";

  return (
    <CardTempate
      pictureSource={pic}
      title={t}
      description={desc}
      renderAccordion={true}
    ></CardTempate>
  );
}

export default Education;
