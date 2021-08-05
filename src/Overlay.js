import React, { forwardRef } from "react";

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText =
        (scroll.current * 100).toFixed(0) + ` | ${(100 - scroll.current * 100).toFixed(0)}`;
    }}
    className="scroll"
  >
    <div style={{ height: "450vh" }}>
      <div className="dot">
        <h1>Jean-Simon Royer</h1>
        Développeur full-stack
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>watchl</h1>
        <h2>Site Web, PWA</h2>
        <p>
          Plateforme pour partager des listes d'idées d'actions et de cryptos
        </p>
        <code>
          <ul>
            <li>NextJS (React Native)</li>
            <li>TypeScript</li>
            <li>GraphQL</li>
            <li>Redis</li>
            <li>PostgreSQL</li>
          </ul>
        </code>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Mille</h1>
        <h2>Site Web, PWA, Librairie NPM, Wrapper</h2>
        <p>
          App FinTech qui offre aux jeunes adultes une façon d'investir tout en
          dépensant localement
        </p>
        <code>
          <ul>
            <li>Angular 10</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Plaid (Wrapper)</li>
            <li>Firebase</li>
            <li>HTML/CSS/JS</li>
          </ul>
        </code>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>LightFlix</h1>
        <h2>Site Web</h2>
        <p>Plateforme de streaming utilisant TMDB</p>
        <code>
          <ul>
            <li>NextJS (ReactJS)</li>
            <li>TypeScript</li>
            <li>Chakra UI</li>
            <li>Sass</li>
          </ul>
        </code>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>RAMDashboard</h1>
        <h2>PWA</h2>
        <p>
          Dashboard pour obtenir les documents d'une compagnie sur le site de la
          SEC
        </p>
        <code>
          <ul>
            <li>Angular</li>
            <li>Typescript</li>
            <li>ExpressJS</li>
            <li>Cheerio</li>
          </ul>
        </code>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Minesweeper</h1>
        <h2>Site Web</h2>
        <p>Petit jeu de démineur avec mises, comme au casino</p>
        <code>
          <ul>
            <li>HTML/CSS/JS</li>
          </ul>
        </code>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Portfolio</h1>
        <h2>Site Web</h2>
        <p>Portfolio personnel</p>
        <code>
          <ul>
            <li>ReactJS</li>
            <li>*.glb</li>
            <li>Three.js</li>
            <li>Firebase</li>
          </ul>
        </code>
      </div>
    </div>
    <div className="caption">
      <span ref={caption}>0 | 100</span>
    </div>
  </div>
));

export default Overlay;
