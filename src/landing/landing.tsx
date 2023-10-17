import "./landing.css";

export const LandingPage = () => (
  <div className="landing-page">
    <div className="presentation">
      <div className="my-name">
        <h1>Dario Azzali</h1>
        <h2>Full stack developer</h2>
      </div>
      <div className="presentation-text">
        <p>
          Passionate full-stack developer, mechanical engineer, and clearly not
          UI designer currently searching a way to work on Rust projects 🦀.
          <br />
          I’ve been doing React application and NodeJs simple rest api.
          <br />
          Linux enthusiast although not power user 🐧, love to learn new things,
          especially if challenging.
          <br />
          Love thick books on coding.
        </p>
      </div>
    </div>
    <div className="landing-button-container">
      <button id="landing-button">
        <a href="#my-works">See my works </a>{" "}
      </button>
    </div>
  </div>
);
