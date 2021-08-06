import React from "react";
import "./About.scss";

class About extends React.Component {
  title = "About\n";

  render(): JSX.Element {
    return (
      <div className="home">
        <div className="home-text">
          <div>
            <span className="title">{this.title}</span>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default About;
