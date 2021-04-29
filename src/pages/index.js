import * as React from "react";
import "normalize.css";
import "../styles/index.scss";

const IndexPage = () => {
  return (
    <main>
      <div className="banner">
        <div className="content-container">
          <div>Hi, my name is</div>
          <h1 className="align-center">Shane McFadden</h1>
          <div className="align-center">and I'm a</div>
          <h2 className="align-right">Full stack developer</h2>
        </div>
      </div>
      <h2>Portfolio projects:</h2>
      <ul>
        <li>
          <a href="https://github.com/shanemcfadden/interactive-pathfinder">
            Interactive Pathfinder
          </a>
        </li>
        <li>
          <a href="https://github.com/shanemcfadden/budget-api">Budget API</a>
        </li>
        <li>
          <a href="https://github.com/shanemcfadden/mcfaddenpiano.com">
            mcfaddenpiano.com
          </a>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;
