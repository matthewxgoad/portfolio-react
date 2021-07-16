import React from "react";

export default function PortfolioCard( {project} ) {
  return (
    <div className="column">
        <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
            <a href={project.urlDeployed} alt={project.title} target="blank">
                <img src={project.image} alt={project.title} /> 
            </a>
            </figure>
        </div>
        <div className="card-content">
            <p className="title">{project.title}</p>
            <div className="content">
            {project.description}
            <br/>
            {project.languages.map( (language, index) => {
                return (
                    <span key={index} className="tag is-link">{language} </span>
                    )
                })}
            </div>
            <div className="field has-addons">
            <p className="control">
                <a href={project.urlDeployed} alt={project.title}  target="blank">
                <button className="button is-info">Visit Site</button>
                </a>
            </p>
            <p className="control">
                <a
                href={project.urlRepo}
                alt="{project.title} GitHub Repo"
                target="blank"
                >
                <button className="button is-success">GitHub Repo</button>
                </a>
            </p>
            </div>
        </div>
        </div>
    </div>
  );
}
