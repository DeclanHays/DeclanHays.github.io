import React from "react";
import CardTempate from "../CardTemplate";

function Skills() {
  let pic = "https://via.placeholder.com/100"
  let t = "Skills";
  let desc = "My professional experience ranges from web development at Veradigm, to working as a river guide in the Summer.";

  return (
    <CardTempate
      pictureSource={pic}
      title={t}
      description={desc}
      renderAccordion = {true}
    ></CardTempate>
  );
}

export default Skills;
