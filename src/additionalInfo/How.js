import React, { Component } from "react";
import "./additional.css";

class How extends Component {
  render() {
    return (
      <div className="additional">
        <h2>What is this?</h2>
        <p>
          Dark Rolls is meant to be used in conjunction with the Dark Souls
          board game. Lets say you can't decide what gear you should upgrade
          for, or you need to decide who should attack and who should back off.
          Is 3 blacks and a -1 modifier better than a blue and a +1? I hope this
          site helps answer those on the fly questions, best of luck Ashen Ones!
        </p>
        <p>
          Dark Rolls also works on mobile. I assumed most people wouldn't drag
          their PC to their board game sessions, but hey whatever works.
        </p>
      </div>
    );
  }
}

export default How;
