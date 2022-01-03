import { useState } from "react";
import { Form } from "react-bootstrap";
import { useCookies } from 'react-cookie';

export default function SetReadCookie(){
    const [text, setText] = useState("Loading...");
    const [cookies, setCookie] = useCookies(['user']);

    return (
            <Form>
                <Form.Text>This is your cookie's value: { cookies.test }</Form.Text>
                <Form.Group>
                    <Form.Label>Write something and press enter it should be saved in a cookie...</Form.Label>
                    <Form.Control type="text" placeholder="Ba da bap"
                                  onKeyPress={ event => setCookie("test", event.target.value) }
                    />
                </Form.Group>
            </Form>
    );
}