import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./education.css";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
const education = [
  {
    date: "January 2020",
    title: "Msc in mechanical engineering",
    description: "Sapienza università di roma 110/110 Summa con laude",
  },

  {
    date: "Sept. 2017",
    title: "Bsc in Mechanical Engineering",
    description: "Sapienza Università di Roma, Rome",
  },
  {
    date: "Sept. 2013",
    title: "Undergraduate Degree in Economics",
    description: "Università degli studi Roma TRE, Rome",
  },
];

export const MyEducation = () => (
  <div id="education">
    <h1>
      <FontAwesomeIcon icon={faGraduationCap} className="mx-2" />
      Education
    </h1>
    <div className="educations-container">
      <ul className="p-2">
        {education.map((el) => {
          return (
            <li className="my-li">
              <div className="date">
                <div>{el.date}</div>
              </div>
              <div className="education-details">
                <div className="education-title">{el.title}</div>
                <div className="text-description">{el.description}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);
