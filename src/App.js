import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import cv from "./cv.PNG";
import {
  Loader,
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/mac-draco.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow />
      <mesh castShadow receiveShadow />
    </group>
  );
}

useGLTF.preload("/mac-draco.glb");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jean-Simon Royer</h1>
        <a
          href="https://www.github.com/jsip"
          target="_blank"
          rel="noreferrer"
          style={{ "padding-top": "2rem", zIndex: "99" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="32"
            height="32"
          >
            <path
              fill-rule="evenodd"
              fill="#fff"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/jean-simon-royer-453a38196/"
          target="_blank"
          rel="noreferrer"
          style={{ paddingTop: "2rem", zIndex: "99" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="32"
            height="32"
          >
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            />
            <path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            />
          </svg>
        </a>
      </header>
      <div>
        <img src={cv} alt="cv" style={{}}></img>
        {/* 
        <div class="cv-cont">
          <div class="grid-left">
            <div class="rows-cont">
              <div class="row1">
                <h4>Jean-Simon Royer</h4>
              </div>
              <div class="row2">
                <h4>Expérience</h4>
              </div>
              <div class="row3">
                <h4>Compétences</h4>
                <ul>
                  <li>Bilingue écrit/parlé</li>
                  <li>Déterminé</li>
                  <li>Entreprenant</li>
                </ul>
              </div>
              <div class="row4">
                <h4>Éducation</h4>
              </div>
              <div class="row5">
                <h4>Intérêts</h4>
              </div>
            </div>
          </div>
          <div class="grid-right">
            <div class="arows-cont">
              <div class="arow1">
                <ul>
                  <li>jeansimon.dev</li>
                  <li>jsimonroyer@gmail.com</li>
                  <li>(581) 986-1054</li>
                </ul>
              </div>
              <div class="arow2">
                <div>
                  <div>
                    <div>
                      <h4>Mille Technologies Financières</h4>
                      <span>
                        <h6>Co-Fondateur</h6>
                        <h6>Depuis 2020</h6>
                      </span>
                    </div>
                    <li>
                      <p>
                        Conception, préparation et création d’un produit en
                        équipe
                      </p>
                    </li>
                    <li>
                      <p>
                        Modélisation, création et maintenance de
                        l’infrastructure technologique
                      </p>
                    </li>
                    <li>
                      <p>Création et utilisation d’un DevOps flow en CI/CD</p>
                    </li>
                    <li>
                      <p>Création du marketing et de l’image de marque Mille</p>
                    </li>
                  </div>
                  <div>
                    <div>
                      <h4>Mille Technologies Financières</h4>
                      <span>
                        <h6>Co-Fondateur</h6>
                        <h6>Depuis 2020</h6>
                      </span>
                    </div>
                    <li>
                      <p>
                        Conception, préparation et création d’un produit en
                        équipe
                      </p>
                    </li>
                    <li>
                      <p>
                        Modélisation, création et maintenance de
                        l’infrastructure technologique
                      </p>
                    </li>
                    <li>
                      <p>Création et utilisation d’un DevOps flow en CI/CD</p>
                    </li>
                    <li>
                      <p>Création du marketing et de l’image de marque Mille</p>
                    </li>
                  </div>
                  <div>
                    <div>
                      <h4>Mille Technologies Financières</h4>
                      <span>
                        <h6>Co-Fondateur</h6>
                        <h6>Depuis 2020</h6>
                      </span>
                    </div>
                    <li>
                      <p>
                        Conception, préparation et création d’un produit en
                        équipe
                      </p>
                    </li>
                    <li>
                      <p>
                        Modélisation, création et maintenance de
                        l’infrastructure technologique
                      </p>
                    </li>
                    <li>
                      <p>Création et utilisation d’un DevOps flow en CI/CD</p>
                    </li>
                    <li>
                      <p>Création du marketing et de l’image de marque Mille</p>
                    </li>
                  </div>
                  <div>
                    <div>
                      <h4>Mille Technologies Financières</h4>
                      <span>
                        <h6>Co-Fondateur</h6>
                        <h6>Depuis 2020</h6>
                      </span>
                    </div>
                    <li>
                      <p>
                        Conception, préparation et création d’un produit en
                        équipe
                      </p>
                    </li>
                    <li>
                      <p>
                        Modélisation, création et maintenance de
                        l’infrastructure technologique
                      </p>
                    </li>
                    <li>
                      <p>Création et utilisation d’un DevOps flow en CI/CD</p>
                    </li>
                    <li>
                      <p>Création du marketing et de l’image de marque Mille</p>
                    </li>
                  </div>
                </div>
              </div>
              <div class="4-col arow3">
                <div>
                  <h5>UX</h5>
                  <br />
                  <br />
                  <ul>
                    <li>Personas</li>
                    <li>Fils de fer</li>
                    <li>Prototypes</li>
                    <li>Tests Unitaires</li>
                  </ul>
                </div>
                <div>
                  <h5>UI</h5>
                  <br />
                  <br />
                  <ul>
                    <li>Illustration</li>
                    <li>Image de marque</li>
                    <li>Implémentation</li>
                    <li>Animation</li>
                  </ul>
                </div>
                <div>
                  <h5>Apps</h5>
                  <br />
                  <br />
                  <ul>
                    <li>Adobe CC</li>
                    <li>InVision</li>
                    <li>Postman</li>
                    <li>VSCode</li>
                  </ul>
                </div>
                <div>
                  <h5>Programmation</h5>
                  <br />
                  <br />
                  <ul>
                    <li>HTML, CSS, PHP, JS</li>
                    <li>TS, Python, GoLang, Node</li>
                    <li>GitHub, Docker, Kubernetes</li>
                    <li>GCP, AWS, Linux, WinOS</li>
                  </ul>
                </div>
              </div>
              <div class="arow4">
                <div>
                  <div>
                    <h4>AEC en Techniques de Développement Web</h4>
                    <span>
                      <h6>Cohorte 2021</h6>
                    </span>
                  </div>
                  <p>Collège O’Sullivan</p>
                </div>
                <div>
                  <div>
                    <h4>Études en Assurances & Services Financiers</h4>
                    <span>
                      <h6>2019</h6>
                    </span>
                  </div>
                  <p>Cégep Ste-Foy</p>
                </div>
              </div>
              <div class="arow5">
                <p>Programmation, Marchés Financiers, Entreprenariat </p>
              </div>
            </div>
          </div>
        </div>
      */}
      </div>
      <section id="canvas">
        <Canvas dpr={[1.5, 2]} linear shadows>
          <fog attach="fog" args={["#272730", 16, 30]} />
          <ambientLight intensity={0.75} />
          <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
            <pointLight intensity={1} position={[-10, -25, -10]} />
            <spotLight
              castShadow
              intensity={2.25}
              angle={0.2}
              penumbra={1}
              position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
          </PerspectiveCamera>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Stars radius={500} depth={50} count={1500} factor={10} />
        </Canvas>
        <div className="layer" />
        <Loader />
      </section>
    </div>
  );
}

export default App;
