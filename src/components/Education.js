import React from "react";
import Card from "./Card";

function Education() {
  let pic = "https://via.placeholder.com/100"
  let t = "Education";
  let desc = "I am currently in my senior year at the University of Maryland, College Park, pursuing my B.S. in Computer Science.";

  return (
    <Card
      pictureSource={pic}
      title={t}
      description={desc}
    ></Card>
  );
}

export default Education;
