import { useState } from "react";
import { Form } from "react-bootstrap";

function reverseString(str){
    const newStr = str.split("");

    let i = newStr.length-1;
    let reversedStr = "";

    for(i; i>=0; i--){
        if(newStr[i] === "("){
            newStr[i] = ")"
        } else if(newStr[i] === ")"){
            newStr[i] = "(";
        } else if(newStr[i] === "["){
            newStr[i] = "]";
        } else if(newStr[i] === "]"){
            newStr[i] = "[";
        } else if(newStr[i] === "{"){
            newStr[i] = "}"
        } else if(newStr[i] === "}"){
            newStr[i] = "{";
        }

        reversedStr += newStr[i];
    }

    console.log(reversedStr);
    return reversedStr;
}

export default function ReverseAString(){
    const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

    const reversedString = reverseString(text);

    return(<>
        <Form>
            <Form.Group>
                <Form.Label>Text to reverse</Form.Label>    
                <Form.Control type="text" placeholder={text} onChange={ event => setText(event.target.value) }/>
            </Form.Group>        
            
            <Form.Group className="mb-3">
                <Form.Label>Reversed text</Form.Label>
                <p>
                    { reversedString }
                </p>
            </Form.Group>
        </Form>
    </>);
}