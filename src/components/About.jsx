import React from "react";
import Bio from "./Bio";
import Links from "./Links";

export default function About() {
  return (
    <section class="section has-background-dark" id="about">
      <div class="columns">
        <Bio />
        <Links />
      </div>
    </section>
  );
}
