import React from "react";
import CardTempate from "../CardTemplate";
import Image from "../../images/UMD-Seal.png";

function Education() {
  let pic = Image;
  let t = "Education";
  let desc =
    "I am currently in my senior year at the University of Maryland, College Park, pursuing my B.S. in Computer Science.";

  let items = [
    {
      title: "University of Maryland",
      subTitle: "Bachelor of Science in Computer Science | Aug. 2021 - May 2024",
      content:
        "Relevant Coursework:",
      listItems: [
        "Current: CMSC430: Intro to Compilers",
        "Current: CMSC417: Computer and Network Security",
        "CMSC433: Programming Language Technologies and Paradigms",
        "CMSC420: Advanced Data Structures",
        "CMSC351: Algorithms",
        "CMSC335: Web Development w/ JavaScript",
        "CMSC330: Organization of Programming Languages",
        "CMSC250: Discrete Math",
        "CMSC216: Intro to Computer Systems",
        "CMSC131/132: Object Oriented Programming w/ Java I/II"
      ]
    },
    {
      title: "Anne Arundel Community College",
      subTitle: "Associate of Science | Aug. 2020 - May 2021",
      content:
        "Relevant Coursework:",
      listItems: [
        "Intro to Data Science",
        "Object Oriented Programming w/ Java"
      ]
    },
  ];

  return (
    <CardTempate
      pictureSource={pic}
      title={t}
      description={desc}
      renderAccordion={true}
      items={items}
    ></CardTempate>
  );
}

export default Education;
