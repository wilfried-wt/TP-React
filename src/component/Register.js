import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import produit from "../asset/prd.png";


function Register() {
  return (
    <>
    {/* <div className='login'> */}
    <Form className='login'>

        <div className="imgcontainer">
            <img src={produit} alt="logo" class="avatar"/>
        </div>
        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
    {/* </div> */}
    
      
    </>
  );
}

export default Register;