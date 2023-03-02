import React from "react";
import '../style/log.css'
import produit from "../asset/prd.png";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';



export default function Login() {

    return(
        <>
            <Form className='login'>

                <div className="imgcontainer">
                                <img src={produit} alt="logo" class="avatar"/>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Username</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter username" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Link to="" className="psw">Forgot password?</Link>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Check type="checkbox" label="Remember me" check="checked"/>
                </Form.Group>
            </Form>


            <div className="signup">
                You don't have an account yet, <Link to="/register">Sign up</Link>
            </div>
        </>
    )
}