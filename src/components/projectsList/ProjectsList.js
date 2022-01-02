import projects from "../../utils/projects";
import { ListGroup } from "react-bootstrap";

export default function ProjectsList(){
    let toDisplay = [];

    projects.forEach( (project) => {
        console.log(project);

        toDisplay.push(
            <a href={ project.link }>
                <ListGroup.Item variant={ project.completed ? "success" : "danger"}>
                    { project.name }
                </ListGroup.Item>
            </a>
        );   

    });

    return( <>
        { toDisplay }
    </> );
}