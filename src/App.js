import './App.css';
import Card from './components/Card.js/Card';
import { Container, Row } from 'react-bootstrap';
import Navbar from './components/Card.js/navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import projects from "./utils/projects";

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
        </Routes>
      </Row>
    </Container>
    </>
  
  );
}

export default App;