import React from "react";
import CardTemplate from "../CardTemplate";

function Education() {
  let t = "Experience";
  let desc = "My professional experience ranges from web development at Veradigm, to working as a river guide in the Summer.";

  let tutorExp = "";
  tutorExp += " "

  let boatRentalsExp = "";
  boatRentalsExp += " ";
  boatRentalsExp += " ";

  let items = [
    {
      title: "Veradigm",
      subTitle: "Software Engineer Intern | May 2023 - Aug. 2023",
      listItems: [
        "Improved accessibility of the Practice Fusion web application by implementing newly designed components into codebase using CSS, HTML, and JavaScript.",
        "Created testing suite to enable UI team to test newly added components against company-set style guidelines.",
        "Addressed accessibility issues in the Practice Fusion web application using accessibility auditing tool."
      ]
    },
    {
      title: "Anne Arundel Community College",
      subTitle: "Data Science Tutor | Oct. 2021 - May 2022",
      content: tutorExp,
      listItems: [
        "Instructed novice programmers in Python and guided debugging.",
        "Assisted math students with coursework up to Calculus I."
      ]
    },
    {
      title: "South River Boat Rentals",
      subTitle: "River Guide | May 2018 - Aug. 2022",
      content: boatRentalsExp,
      listItems: [
        "Led customers on 4-to-8-hour excursions on the Chesapeake Bay.",
        "Taught customers to drive boats safely and to adhere to coast guard regulations.",
        "Worked with team to safely guide dozens of boats to and from docks."
      ]
    },
  ];

  return (
    <CardTemplate
      title={t}
      description={desc}
      renderAccordion={true}
      items={items}
    ></CardTemplate>
  );
}

export default Education;
