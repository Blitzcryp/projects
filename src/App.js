import './App.css';
import Card from './components/Card.js/Card';
import { Container, Row } from 'react-bootstrap';
import Navbar from './components/Card.js/navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";

import ReverseAString from './projects/ReverseAString';

const projects = [
  {
      name: "Reverse a String",
      description: "Enter a string and the program will reverse it and print it out.",
      link: "reverse-a-string",
      element: <ReverseAString/>
  },
  {
    name: "Pig Latin",
    description: ` Pig Latin is a game of alterations played on the English language game. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield anana-bay). Read Wikipedia for more information on rules.`,
    link: "pig-latin",
  },
]

function App() {
  let projectRenderCards = [];
  let projectsRenderRoutes = [];
  projects.forEach( (project) => {
    const card = <Card name={project.name} description={project.description} link={project.link}></Card>;
    const route = <Route path={project.link} element={project.element}>{ project.name }</Route>

    projectRenderCards.push(card);
    projectsRenderRoutes.push(route);

  })

  return (
    <>
    <Navbar/>
    <Container>
      <Row>
        <Routes>
          <Route path="/" element={ projectRenderCards } />
          { projectsRenderRoutes }
          <Route path="reverse-a-string" element={<ReverseAString />} />
        </Routes>
      </Row>
    </Container>
    </>
  
  );
}

export default App;