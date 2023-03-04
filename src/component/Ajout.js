import React from "react";
import { Button } from "react-bootstrap";
import '../style/ajout.css';


export default function Ajout(){


    return(
        <>
            <div className="main-btn">
                <Button  id="w">Ajouter</Button>
            </div>

            <table>
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
            </table>
        </>
    )
}