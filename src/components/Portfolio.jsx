import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import projects from "../data/portfolioCardData";

export default function Portfolio(props) {
  const [portfolioState, setPortfolioState] = useState(projects);
  return (
    <section className="section has-background-warning" id="portfolio">
      <div className="section-heading has-text-centered mb-4">
        <h3 className="title is-2">Portfolio</h3>
        <h4 className="subtitle is-5">
          Stuff I Made.<em>(Or Worked On.)</em>
        </h4>
      </div>
      <div className="container portfolio-container">
        <div className="columns is-desktop is-centered is-multiline">
          {portfolioState.map((project, index) => {
            return <PortfolioCard key={index} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}
