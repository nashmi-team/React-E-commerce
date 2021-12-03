import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
import './cart.css'
import {Table} from "react-bootstrap";
const Cart = () => {
    const [show, setShow] = useState(false);
    //test
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="item">
                <span className="" id="item">1  </span>
            </div>
                <i onClick={handleShow} className="fas fa-cart-plus fa-2x "/>


            <div>
                <div id="cart">

                    <span className="glyphicon glyphicon-shopping-cart" onClick={handleShow}/>
                </div>
                <Modal show={show} onHide={handleClose} className="">
                    <Modal.Header >

                        <Modal.Title className="text-primary">Shopping Bag</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Table striped bordered hover className="">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>

                                    {/*<button className="btn btn-success">+</button>*/}
                                    <input type="number" className="form-control" value="1"/>
                                    {/*<button className="btn btn-danger">-</button>*/}

                                </td>
                                    <td>

                                        <button className="btn btn-danger"> <i className="far fa-trash-alt remove" /></button>
                                    </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </Table>
                        <h3>Total:</h3>
                    </Modal.Body>
                    <Modal.Footer>

                        <button type="button" className="btn btn-default" disabled>CHECKOUT</button>
                        <button type="button" onClick={handleClose} className="btn btn-default" >Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default Cart;