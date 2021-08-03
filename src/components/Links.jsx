import React from 'react';
import resume from '../assets/MatthewGoadResume.pdf';

export default function Links() {
    return (
        <div className="column">
        <div className="card mb-5">
          <div className="card-content">
            <h3 className="title is-2 has-text-centered">Links</h3>
            <div className="buttons is-centered">
              <a href="https://github.com/matthewxgoad" className="button is-large is-warning">Github</a>
              <a href="https://www.linkedin.com/in/goadmatthew/" className="button is-large is-warning">LinkedIn</a>
              <a href="https://www.youtube.com/channel/UCrWJWPKeVUsjYXPPJJ42jUw"
                className="button is-large is-warning">YouTube</a>
              <a href="https://www.facebook.com/matthewxgoad" className="button is-large is-warning">Facebook</a>
              <a href={resume} className="button is-large is-warning">Download
                Resume</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content has-text-centered">
            <h1 className="title"><em>"In this life there are nothing but possibilities."</em></h1>
            <h1 className="subtitle">-Empire Records</h1>
          </div>
        </div>
      </div>
    )
}