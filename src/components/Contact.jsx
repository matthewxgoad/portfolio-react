import React from "react";

export default function Contact() {
  return (
    <section className="section has-background-dark" id="contact">
      <div className="section-heading has-text-centered mb-4">
        <h3 className="title is-2 has-text-warning">Contact</h3>
        <h4 className="subtitle is-5 has-text-warning">
          <em>Holler at me.</em>
        </h4>
      </div>
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <div className="box has-text-centered">
            <div className="block">
              <h2 className="subtitle">Email me:</h2>
              <a href="mailto:matthewxgoad@gmail.com">
                <h1 className="title">matthewxgoad@gmail.com</h1>
              </a>
            </div>
            <div className="block">
              <h2 className="subtitle">Call me:</h2>
              <a href="tel:901-361-0622">
                <h1 className="title">9013610622</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
