import React from "react";
import CardTempate from "../CardTemplate";

function Projects() {
  let pic = "https://via.placeholder.com/100"
  let t = "Projects";
  let desc = "My professional experience ranges from web development at Veradigm, to working as a river guide in the Summer.";

  return (
    <CardTempate
      pictureSource={pic}
      title={t}
      description={desc}
      renderAccordion={true}
    ></CardTempate>
  );
}

export default Projects;
