import React from "react";
import CardTemplate from "../CardTemplate";

function Education() {
  let pic = "https://via.placeholder.com/100"
  let t = "Experience";
  let desc = "My professional experience ranges from web development at Veradigm, to working as a river guide in the Summer.";
  
  let veradigmExp = "Improved accessibility of the Practice Fusion web application by implementing newly designed components into codebase using CSS, HTML, and JavaScript.";
  veradigmExp += " Created testing suite to enable UI team to test newly added components against company-set style guidelines."
  veradigmExp += " Addressed accessibility issues in the Practice Fusion web application using accessibility auditing tool."

  let tutorExp = "Instructed novice programmers in Python and guided debugging.";
  tutorExp += " Assisted math students with coursework up to Calculus I."

  let boatRentalsExp = "Led customers on 4-to-8-hour excursions on the Chesapeake Bay.";
  boatRentalsExp += " Taught customers to drive boats safely and to adhere to coast guard regulations.";
  boatRentalsExp += " Worked with team to safely guide dozens of boats to and from docks.";

  let items = [
    {
      title: "Veradigm",
      subTitle: "Software Engineer Intern | May 2023 - Aug. 2023",
      content: veradigmExp,
      listItems: [
        "a",
        "b"
      ]
    },
    {
      title: "Anne Arundel Community College",
      subTitle: "Data Science Tutor | Oct. 2021 - May 2022",
      content: tutorExp,
      listItems: [
        "a",
        "b"
      ]
    },
    {
      title: "South River Boat Rentals",
      subTitle: "River Guide | May 2018 - Aug. 2022",
      content: boatRentalsExp,
      listItems: [
        "a",
        "b"
      ]
    },
  ];

  return (
    <CardTemplate
      pictureSource={pic}
      title={t}
      description={desc}
      renderAccordion={true}
      items={items}
    ></CardTemplate>
  );
}

export default Education;
