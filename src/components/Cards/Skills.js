import React from "react";
import CardTempate from "../CardTemplate";

function Skills() {
  let t = "Skills";
  let desc = "These are the software development skills I've gained through my education and work experience.";

  let items = [
    {
      title: "Programming Languages",
      content:
        "",
      listItems: [
        "Proficient: JavaScript, Python",
        "Familiar: Java, C, Racket, Rust, OCaml, Haskell, Ruby"
      ]
    },
    {
      title: "Web Development",
      content:
        "",
      listItems: [
        "Ember.js",
        "React",
        "HTML",
        "CSS"
      ]
    },
    {
      title: "Other",
      content:
        "",
      listItems: [
        "Git",
        "Node.js",
        "Linux",
        "Numpy",
        "Pandas",
        "MongoDB",
        "Jira",
        "Confluence"
      ]
    },
  ];

  return (
    <CardTempate
      title={t}
      description={desc}
      renderAccordion = {true}
      items={items}
    ></CardTempate>
  );
}

export default Skills;
