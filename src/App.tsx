import "./App.css";
import Navbar from "./navbar/navbar.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import { UpButton } from "./components/up-button.tsx";
import { MyEducation } from "./education/education.tsx";
import { LandingPage } from "./landing/landing.tsx";
import { MyWorks } from "./works/Works.tsx";

function App() {
  const [upButtonVisible, setButtonVisibility] = useState(false);
  const scrollHanlder = (_: Event, div: HTMLDivElement) => {
    const element = div.getBoundingClientRect();
    element.top <= 0 &&
    element.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
      ? setButtonVisibility(true)
      : setButtonVisibility(false);
  };

  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const div = divRef.current;
    if (div) {
      window.addEventListener("scroll", (e: Event) => scrollHanlder(e, div));
      return () => {
        window.removeEventListener("scroll", (e: Event) =>
          scrollHanlder(e, div),
        );
      };
    }
  }, []);
  return (
    <>
      <Navbar />
      <LandingPage />
      <MyWorks refrerence={divRef} />
      <UpButton visibility={upButtonVisible} />
      <MyEducation />
    </>
  );
}

export default App;
