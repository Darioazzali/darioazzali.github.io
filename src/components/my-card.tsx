import { Work } from "../works/works";

export const MyCard: React.FC<{ work: Work }> = ({ work }) => (
  <div className="my-card">
    <div className="my-card-title">
      <h1>{work.title}</h1>
      <div>
        {work.logos?.map((logo) => (
          <img src={logo} height={"32px"} width={"32px"} />
        ))}
      </div>
    </div>
    <img src={work.image_url} className="my-card-image" />
    <div className="my-card-body">
      <h2>{work.subTitle}</h2>
      <p>{work.description}</p>
      <a href={work.link} target="_blank">
        <div className="my-button-container">
          <button className="my-button">Go to page</button>
        </div>
      </a>
    </div>
  </div>
);
