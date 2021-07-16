import React from 'react';
import logo from '../images/mg-icon.svg';

export default function NavBar() {
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
      
          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
      
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
            //   Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
      
      });
    return (
        <>
            <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="./index.html">
                        <img className="img-responsive" alt={"MG"} src={logo} width="112" />
                    </a>

                    <div className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>
                <div id="navbarBasicExample" className="navbar-menu has-text-right">
                    <div className="navbar-start">
                        <a href="#about" className="navbar-item">
                            About
                        </a>
                        <a href="#portfolio" className="navbar-item">
                            Portfolio
                        </a>
                        <a href="#contact" className="navbar-item">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}