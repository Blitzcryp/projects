import { useState } from "react";
import { Form } from "react-bootstrap";

export default function FizzBuzz(){
    const [number, setNumber] = useState(10);

    let toDisplay = [];

    for(let i = 1; i <= number; i++){
        let matched = false;
        let temp = "";

        if(i % 3 === 0){
            matched = true;
            temp += "Fizz";
        } 

        if(i % 5 === 0){
            matched = true;
            temp += "Buzz";
        }

        if(!matched){
            temp = i;
        }

        toDisplay.push(<p>{ temp }</p>)
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>FizzBuzz up to:</Form.Label>    
                <Form.Control type="number" placeholder={number} onChange={ event => setNumber(event.target.value) } min="1"/>
            </Form.Group>        
            { toDisplay }
        </Form>
    );
}