import * as React from "react";
import "normalize.css";

const IndexPage = () => {
  return (
    <main>
      <h1>Shane McFadden</h1>
      <h2>Full stack developer</h2>
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
