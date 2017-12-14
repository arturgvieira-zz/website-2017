import React, { Component } from 'react';
import './CTA.css';

class CTA extends Component {
  render() {
    return (
            <div className="CTA">
              <a href="https://arturgvieira.quip.com/" target="_blank">
                <div className="hire-me">
                  <h1>Hire Me</h1>
                </div>
              </a>
            </div>
        );
    }
}

export default CTA;