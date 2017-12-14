import React, { Component } from 'react';
import './About.css';
import Intro from './components/intro/Intro.js';
import stack from './stack_1200.jpg';

class About extends Component {
  render() {
    return (
      <div className="About">
        <a name="about"></a>
        <Intro />
        <section className="grid">
          <article className="about-me">
            <h2>I am a Web Application Developer.</h2>
            <p>I am experienced across three of the <a href="https://www.tiobe.com/tiobe-index/" target="_blank">top 8</a> most popular programming languages.</p>
            <p>
              This means that I am able to write an application from beginning to end in Java, C# and JavaScript. This is my Stack.
            </p>
            <img className="stack" src={stack} alt="My Stack" />
          </article>
          <aside className="about-history">
            <h3>I started with Java.</h3>
            <p>
              Java is considered both a simple and powerful programming language. 
              I chose to learn it in 2009 because at the time I was gearing up to start college. 
              It was the language of choice for most of the academic programs which I was interested in.
              I fell in love with the simple syntax and comprehensive language API documentation.
            </p>
            <p>
              I am able to build an API application from scratch using the Spring framework in Java, currently <a href="https://dzone.com/articles/7-best-java-frameworks-for-2016" target="_blank">the most popular</a> Java Framework.
              A framework which works well with Java's built-in annotations allowing code to remain portable.
            </p>
            <p>
              This is one of my core strengths. <a href="https://www.ibm.com/developerworks/library/ws-restful/index.html" target="_blank">The REST pattern</a> is a very popular pattern for web applications and is used widely in the technology industry.
              Using Java as the language to build the server, I am able to have data ready via API for any user interface.
            </p>
          </aside>
        </section>
      </div>
    );
  }
}


export default About;