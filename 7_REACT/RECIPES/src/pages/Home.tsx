import HeroIllustration from "../assets/Hero-illustrator.svg";

export const Home = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center" style={{ height: "calc(100vh - 88px)" }}>
        <div className="col d-flex flex-column justify-content-center">
          <h1 className="mb-3">Our recipes made your day special</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque sunt voluptatem aut laboriosam maxime.
            Tenetur pariatur blanditiis ex voluptatem nam soluta asperiores impedit assumenda incidunt, quidem.
          </p>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <img src={HeroIllustration} alt="Hero" className="w-75" />
        </div>
      </div>
    </div>
  );
};
