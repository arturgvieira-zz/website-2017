import React, { Component } from 'react';
import './Contact.css';
import imgLinkedIn from './Logo-2C-28px-R.png';
import imgTwitter from './Twitter_Logo_Blue.png';
import imgGitHub from './GitHub-Mark-32px.png';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <a name="contact"></a>
        <h3>I am currently looking for new opportunities.</h3>
        <h3>
          <a href="mailto:contact@arturgvieira.com" >contact@arturgvieira.com</a>
        </h3>
        <div className="links">
          <a href="https://www.linkedin.com/in/arturgvieira/"><img className="img" src={imgLinkedIn} alt="https://www.linkedin.com/in/arturgvieira/"/></a>
          <a href="https://twitter.com/artur_g_vieira"><img className="img" src={imgTwitter} alt="https://twitter.com/artur_g_vieira"/></a>
          <a href="https://github.com/arturgvieira"><img className="img" src={imgGitHub} alt="https://github.com/arturgvieira"/></a>
        </div>
      </div>
    );
  }
}

export default Contact;