import React, { Component } from 'react';
import './Coding.css';

class Coding extends Component {
  render() {
    return (
      <div className="Coding">
        <a name="coding"></a>
        <article>
          <h3> I have a YouTube <a href="https://www.youtube.com/channel/UCQCCCuSf9D1mLp2QAnj20Sw" target="_blank">channel</a> where I have shared some sample code and ideas.</h3>
        </article>
        <article className="wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/38gv82_7uoY?rel=0&amp;controls=0" frameBorder="0"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mdMRQMQMSas?rel=0&amp;controls=0" frameBorder="0"></iframe>
        </article>
      </div>
    );
  }
}

export default Coding;
