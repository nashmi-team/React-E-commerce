import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
// import Button from 'react-bootstrap/Button'
import "./cart.css";
import { Table } from "react-bootstrap";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    items,
  } = useCart();

  const [show, setShow] = useState(false);
  //test
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="item">
        <span className="" id="item">
          {totalItems}
        </span>
      </div>
      <i onClick={handleShow} className="fas fa-cart-plus fa-2x " />

      <div>
        <div id="cart">
          <span
            className="glyphicon glyphicon-shopping-cart"
            onClick={handleShow}
          />
        </div>
        <Modal show={show} onHide={handleClose} className="">
          <Modal.Header>
            <Modal.Title className="text-primary">Shopping Bag</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isEmpty ? (
              <h3>Your Cart is Empty</h3>
            ) : (
              <Table striped bordered hover className="cart_table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, id) => {
                    return (
                      <tr key={id}>
                        <td>{item.id}</td>
                        <td className="product_img">
                          <img src={item.img} alt={item.alt} />
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <b>{item.price} JD</b>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger decrease"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <b className="quantity">{item.quantity}</b>
                          <button
                            className="btn btn-success increase"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => removeItem(item.id)}
                          >
                            <i className="far fa-trash-alt remove" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan="4">
                      <h3>Total: {cartTotal} JD</h3>
                    </td>
                    <td colSpan="2">
                      <button
                        className="btn btn-danger"
                        onClick={() => emptyCart(items)}
                      >
                        Clear Cart
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className={
                isEmpty ? "btn btn-default" : "btn btn-default checkout_active"
              }
              disabled={isEmpty ? true : false}
            >
              CHECKOUT
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="btn btn-default"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Cart;
