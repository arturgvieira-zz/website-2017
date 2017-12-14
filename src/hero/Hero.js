import React, { Component } from 'react';
import './Hero.css';
import CTA from './components/CTA.js';
import announcement from './announcement.svg';

class Hero extends Component {
  render() {
    return (
          <div className="Hero">
            <section className="card">
              <article>
                <div className="intro-content cards">
                  <h2>Welcome</h2>
                </div>
                <div className="alerts cards">
                  <img src={announcement} alt="Icon" />
                  <a href="https://www.gofundme.com/donate-10-kano-computer-kits" target="_blank">
                    <span>Help Me! Donate 10 Kano Computer Kits</span>
                  </a>
                </div>
                <div className="portfolio cards">
                  <a href="https://portfolio.arturgvieira.com" target="_blank"><p>Portfolio</p></a>
                </div>
              </article>
              <aside>
                <div className="portrait"></div>
                <div className="cta cards">
                  <CTA />
                </div>
              </aside>
            </section>
          </div>
        );
    }
}

export default Hero;
