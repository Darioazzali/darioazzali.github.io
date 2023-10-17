import { RefObject } from "react";
import { Work, my_works } from "./works";
import { MyCard } from "../components/my-card";
import "./works.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";

export const MyWorks: React.FC<{ refrerence: RefObject<HTMLDivElement> }> = ({
  refrerence: ref,
}) => (
  <div id="my-works" className="work" ref={ref}>
    <h1>
      <FontAwesomeIcon icon={faCode} className="me-2" />
      My Works
    </h1>
    <div className="cards-container">
      {my_works.map((work: Work) => (
        <MyCard work={work} />
      ))}
    </div>
  </div>
);
