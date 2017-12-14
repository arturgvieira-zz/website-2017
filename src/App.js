import React, { Component } from 'react';
import './App.css';
import Hero from './hero/Hero.js';
import About from './about/About.js';
import Architecture from './architecture/Architecture.js';
import Coding from './coding/Coding.js';
import Contact from './contact/Contact.js';
import Ux from './ux/Ux.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Artur G. Vieira</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link" href="#home">Home</a>
                <a className="mdl-navigation__link" href="#about">About</a>
                <a className="mdl-navigation__link" href="#architecture">Architecture</a>
                <a className="mdl-navigation__link" href="#coding">Coding</a>
                <a className="mdl-navigation__link" href="#ux">UX</a>
                <a className="mdl-navigation__link" href="#contact">Contact</a>
                <a className="mdl-navigation__link" href="https://portfolio.arturgvieira.com" target="_blank">Portfolio</a>
                <a className="mdl-navigation__link" href="https://arturgvieira.quip.com" target="_blank">Hire</a>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Artur G. Vieira</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="#home">Home</a>
              <a className="mdl-navigation__link" href="#about">About</a>
              <a className="mdl-navigation__link" href="#architecture">Architecture</a>
              <a className="mdl-navigation__link" href="#coding">Coding</a>
              <a className="mdl-navigation__link" href="#ux">UX</a>
              <a className="mdl-navigation__link" href="#contact">Contact</a>
              <a className="mdl-navigation__link" href="https://portfolio.arturgvieira.com" target="_blank">Porfolio</a>
              <a className="mdl-navigation__link" href="https://arturgvieira.quip.com" target="_blank">Hire</a>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <a name="home"></a>
            <Hero />
            <About />
            <Architecture />
            <Coding />
            <Ux />
            <Contact />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
