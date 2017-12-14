import React, { Component } from 'react';
import './Ux.css';

class Ux extends Component {
  render() {
    return (
    <div className="Ux">
        <section>
          <a name="ux"></a>
          <article>
            <h3>Rich User Interfaces, Responsive Design and ReactJS</h3>
            <p>
             Soon after building my first API I started to look for another language to work with. One that allowed me to program for the web.
             I chose JavaScript and started to build web solutions that had rich user interfaces.
             Web portals for applications, and it is what I enjoy doing the most. 
             Building web applications.
             It changed how I approached problems, it changed me as a developer. 
             It's the language with the most activity today, the language of the web.
            </p>
            <p>
             I started using JavaScript in 2012 when I needed a user interface component to process JSON, that was when I started using jQuery and it's AJAX function.
             Once I knew more about JavaScript I started to keep a set of frameworks which I used day to day. 
             Although I use React JS today for most of my user interface needs, I have used a wide selection from the available frameworks.
            </p>
            <p>
              I am experienced with Angular and KnockoutJS as well as jQuery. Although I have experience with these other libraries I prefer to use ReactJS, in a NodeJS development environment.
              I currently use the Cloud9 ide, which recently has been deployed in Amazon's AWS.
            </p>
            <p>
              I have recently, started to use Redux, which I find to be a great solution for state management in the user interfaces I build.
            </p>
          </article>
        </section>
    </div>
    );
  }
}

export default Ux;
