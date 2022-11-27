import React from "react";

// import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

import "./compStyles/AppBar.css";
const AppBar = () => {
  //   const COLORS = [
  //     "#bbf7d0",
  //     "#99f6e4",
  //     "#bfdbfe",
  //     "#ddd6fe",
  //     "#f5d0fe",
  //     "#fed7aa",
  //     "#fee2e2",
  //   ];
  const TAGS = [
    "Excel",
    "VBA",
    "DAX",
    "Power BI",
    "Tableau",
    "Python",
    "R",
    "SQL",
    "JavaScript",
    "HTML",
    "CSS",
    "React JS",
    "Bootstrap",
    "Flutter",
    "Dart",
    "Adobe XD",
    "Office 365",
    "Priority",
    "MySQL",
    "SQL Server",
    "Zoho Creator",
    "Node JS",
    "Next JS",
  ];
  const DURATION = 15000;
  const ROWS = 4;
  const TAGS_PER_ROW = 10;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

  const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
      <div
        className="loop-slider"
        style={{
          "--duration": `${duration}ms`,
          "--direction": reverse ? "reverse" : "normal",
        }}
      >
        <div className="inner">
          {children}
          {children}
        </div>
      </div>
    );
  };

  const Tag = ({ text, color }) => (
    <div className="tag" style={{ "--color": color }}>
      <span>#</span> {text}
    </div>
  );

  const App = () => (
    <div className="app">
      <header>
        <h1>Some Of My Skills</h1>
        {/* <p>CSS only, content independent, bi-directional, customizable</p> */}
      </header>
      <div className="tag-list">
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 500, DURATION + 500)}
            reverse={i % 2}
          >
            {shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map((tag) => (
                <Tag text={tag} key={tag} />
              ))}
          </InfiniteLoopSlider>
        ))}
        <div className="fade" />
      </div>
    </div>
  );

  ReactDOM.render(<App />, document.body);
  return <div></div>;
};

export default AppBar;
