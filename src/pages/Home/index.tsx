import React from "react";
import "./Home.scss";

class Home extends React.Component {
  title = "Walmart GHC Code Challenge Submission - Erika Tan\n";

  render(): JSX.Element {
    return (
      <div className="home">
        <div className="home-text">
          <div>
            <span className="title">{this.title}</span>
          </div>
          <div>With Walmart’s scale, scope, and focus on the customer, what else can they do or further enhance to provide value?</div>
        </div>
      </div>
    );
  }
}

export default Home;
