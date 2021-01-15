import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>"Welcome to my future portfolio!" - Thomas</h1>
    <p><strong>Current Status</strong>: Finishing up boot-camp, and working on my final project. Here is a bare bones page with links to my previous projects!</p>
    <p><strong>Contact:</strong> tcgilbert94@gmail.com</p>
    <h3>Projects</h3>
    <ul>
      <li>
        <strong>Kaleidoscope Budgeting App</strong>
        <ul>
          <li>
            Deployment Link -->{" "}
            <a
              target="_blank"
              href="https://kaleidoscope-budget.herokuapp.com/"
            >
              Kaleidoscope
            </a>
          </li>
          <li>
            Front-end Repo -->{" "}
            <a
              target="_blank"
              href="https://github.com/jtreeves/budget-frontend"
            >
              Github Front
            </a>
          </li>
          <li>
            Back-end Repo -->{" "}
            <a
              target="_blank"
              href="https://github.com/jtreeves/budget-backend"
            >
              Github Back
            </a>
          </li>
        </ul>
      </li>
      <li>
        <strong>Think-Ewe Express App</strong>
        <ul>
          <li>
            Deployment Link -->{" "}
            <a
              target="_blank"
              href="https://think-ewe.herokuapp.com/"
            >
              Think-Ewe
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/tcgilbert/think-ewe">Github Repo</a>
          </li>
        </ul>
      </li>
      <li>
        <strong>Rocket Sauce Web Game</strong>
        <ul>
          <li>
            Deployment Link -->{" "}
            <a
              target="_blank"
              href="https://tcgilbert.github.io/rocket-sauce/"
            >
              Rocket Sauce
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/tcgilbert/rocket-sauce">Github Repo</a>
          </li>
        </ul>
      </li>
    </ul>

  </Layout>
)

export default IndexPage
