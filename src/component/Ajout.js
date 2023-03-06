import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../style/ajout.css';
import { Modal } from "react-bootstrap";

const items = [
    {id:1, name: 'pencil', price: 100},
    {id:2, name: 'ruler', price: 150},
    {id:3, name: 'pen', price: 200},
    {id:4, name: 'book', price: 350}
]



const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1)
  }

export default function Ajout(){

    const [product, setProduct] = useState(items);

    const renderHeader = () => {
        return <tr>
          {Object.keys(items[0]).map(key => <th>{capitalize(key)}</th>)}
        </tr>
      }

      const renderProducts = () => {
        return product.map(({ id, name, price }) => {
            return <tr key={id} >
            <td style={{ padding: '10px', border: '1px solid black' }}>{id}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{name}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{price}</td>
            {/* <td className="d"> */}
                        <Button className="minor-btn">add</Button>
                        <Button className="minor-btn" variant="danger">del</Button>
            {/* </td> */}
          </tr>

        })
      }

      const renderTable = () => {
        return (
          <table>
            {renderHeader()}
            <tbody>
              {renderProducts()}
            </tbody>
          </table>
        )
      }

    const [show, setShow] = useState(false);
    const [name, setName] = useState({text: ""});
    const [price, setPrice] = useState({num: 0});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const addProduct = () =>{
        const newItem = [
            ...items, 
            {id:items.length +1, name: name, price: price}
        ]
        setProduct(newItem);
        console.log(newItem);
        setShow(false)
    }


    return(
        <>
            <div className="main-btn">
                <Button  id="w" onClick={handleShow}>Ajouter</Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter name" onChange={e => setName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control placeholder="Enter price" onChange={e => setPrice(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addProduct}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div style={{ margin: '50px' }}>
              {renderTable()}
            </div>









            {/* <table>
                <tr>

                    <th id="id">id</th>
                    <th>nom</th>
                    <th>prix</th>
                    <th>action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>xoxo</td>
                    <td>150</td>
                    <td className="d">
                        <Button className="minor-btn">add</Button>
                        <Button className="minor-btn" variant="danger">del</Button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>xoxo</td>
                    <td>150</td>
                    <td className="d">
                        <Button className="minor-btn">add</Button>
                        <Button className="minor-btn" variant="danger">del</Button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>xoxo</td>
                    <td>150</td>
                    <td className="d">
                        <Button className="minor-btn">add</Button>
                        <Button className="minor-btn" variant="danger">del</Button>
                    </td>
                </tr>
            </table> */}
        </>
    )
}