import React from "react";
import CardTempate from "../CardTemplate";

function Projects() {
  let t = "Projects";
  let desc = "These are some of the projects I've done in my free time and for classes. Each one lists the language/tool used to make it, and the date.";

  let items = [
    {
      title: "Compiler",
      subTitle: "Racket | Feb. 2024 (Ongoing)",
      content:
        "",
      listItems: [
        "Utilize Racket to bootstrap a compiler for the Racket programming language.",
        "Implemented functionality to emit instructions in x86 assembly for various features of Racket",
        "Implemented ‘if‘, ‘case‘, and ‘cond‘ expressions, ‘let‘ bindings, and various binary and unary operations",
      ]
    },
    {
      title: "Portfolio Website",
      subTitle: "React | Aug. 2023",
      content:
        "",
      listItems: [
        "Designed and Implemented a responsive, mobile-friendly portfolio website.",
      ]
    },
    {
      title: "DVD Emporium",
      subTitle: "Haskell | May 2023",
      content:
        "Ember.js, React, HTML, CSS",
      listItems: [
        "Implemented a specialized data structure, an STM queue, for use in concurrent programs using the Software Transactional Memory model.",
        "Wrote the back end for a hypothetical DVD delivery service which uses the STM queue to schedule concurrent “drivers” to “deliver” DVD's in order, as they are ordered."
      ]
    },
    {
      title: "Data Structures",
      subTitle: "Python | Jan. 2023 - May 2023",
      content:
        "",
      listItems: [
        "Used Python to implement various data structures including Scapegoat Trees, B+ Trees, Bloom Filters, AVL Trees, and Binary Search Trees.",
      ]
    },
    {
      title: "OCaml Interpreter",
      subTitle: "OCaml | Nov. 2023",
      content:
        "",
      listItems: [
        "Used OCaml to write “MicrOCaml”: a lexer, parser, and interpreter for a miniature version of OCaml. MicrOCaml allows the user to write programs which are fully processed and executed by MicrOCaml.",
        "Includes capabilities for handling “let” and “if” expressions, function definitions, anonymous functions, and binary operators."
      ]
    },
    {
      title: "Summer Camp App",
      subTitle: "JavaScript, HTML, CSS | Nov. 2023",
      content:
        "",
      listItems: [
        "Designed a web application, written in JavaScript, for a fictional summer camp.",
        "Utilized MongoDB to store and retrieve applicant data upon request and used Express for routing."
      ]
    },
    {
      title: "Regular Expression Engine",
      subTitle: "OCaml | Oct. 2022",
      content:
        "",
      listItems: [
        "Created an engine which allows the user to convert between regular expressions, non-deterministic finite automata, and deterministic finite automata using OCaml.",
        "Allows the user to provide a regular expression and test if given inputs are valid.",
      ]
    },
  ];

  return (
    <CardTempate
      title={t}
      description={desc}
      renderAccordion={true}
      items={items}
    ></CardTempate>
  );
}

export default Projects;
