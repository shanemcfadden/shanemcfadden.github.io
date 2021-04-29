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
      <div className="content-container">
        <h2>Portfolio projects:</h2>
        <div className="content-card">
          <h3>Interactive Pathfinder</h3>
          <p>
            A single page application that allows users to select start and end
            points from a grid and calculate the easiest path between them. They
            may also draw textures to make it easier or harder to reach the end.
            This pathfinder implements Dijkstra's algorithm to find a path with
            the lowest difficulty.
          </p>
          <div className="button-row">
            <a href="https://shanemcfadden.github.io/interactive-pathfinder/">
              View project
            </a>
            <a href="https://github.com/shanemcfadden/interactive-pathfinder">
              View code on Github
            </a>
          </div>
        </div>
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
      </div>
    </main>
  );
};

export default IndexPage;
