import * as React from "react";
import "normalize.css";
import "../styles/index.scss";

const IndexPage = () => {
  return (
    <main>
      <div className="banner">
        <div className="content-container">
          <div>Hello, my name is</div>
          <h1>Shane McFadden</h1>
          <div>and I'm a</div>
          <h2>Full stack developer</h2>
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
