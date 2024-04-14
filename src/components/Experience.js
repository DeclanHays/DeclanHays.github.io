import React from "react";
import Card from "./Card";

function Education() {
  let pic = "https://via.placeholder.com/100"
  let t = "Experience";
  let desc = "My professional experience ranges from web development at Veradigm, to working as a river guide in the Summer.";

  let veradigmExp = "Improved accessibility of the Practice Fusion web application by implementing newly designed components into codebase using CSS, HTML, and JavaScript.";
  veradigmExp += "Created testing suite to enable UI team to test newly added components against company-wide style guidelines."
  veradigmExp += "Addressed accessibility issues in the Practice Fusion web application using accessibility auditing tool."

  return (
    <Card
      pictureSource={pic}
      title={t}
      description={desc}
      hasList = {false}
    ></Card>
  );
}

export default Education;
