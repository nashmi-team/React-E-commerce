import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./cart.css";
import { Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";

const Cart = ({ logged }) => {
  const {
    isEmpty,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    items,
  } = useCart();

  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemove = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(item);
        Swal.fire(
            'Deleted!',
            'Your item has been deleted.',
            'success'
        )
      }
    })
  };

  const handleClearCart = (items) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        emptyCart(items);
        Swal.fire(
            'Deleted!',
            'Your cart has been deleted.',
            'success'
        )
      }
    })
  };


  const handelCheckout = () => {
    if (logged) {
      history.push({
        pathname: `/checkout`,
      });
      setShow(false);
    } else {
      history.push({
        pathname: `/registeration`,
      });
      setShow(false);
    }
  };
  return (
    <>
      <div className="item">
        <span className="" id="item">
          {totalItems}
        </span>
      </div>
      <i onClick={handleShow} className="fas fa-cart-plus fa-2x cart-icon" />

      <div>
        <div id="cart">
          <span
            className="glyphicon glyphicon-shopping-cart"
            onClick={handleShow}
          />
        </div>
        <Modal show={show} onHide={handleClose} className="" size="lg">
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
                    <th>Name</th>
                    <th>Image</th>

                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, id) => {
                    return (
                      <tr key={id}>
                        <td className="product-name">{item.name}</td>
                        <td className="product_img">
                          <img src={item.img} alt={item.alt} />
                        </td>

                        <td>
                          <b>{item.price} JD</b>
                        </td>
                        <td className="quantitiy-cell">
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
                            className="btn btn-primary increase"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger remove"
                            onClick={() => handleRemove(item.id)}
                          >
                            <i className="far fa-trash-alt " />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan="3">
                     <span className="total-td">Total: {cartTotal} JD</span>
                    </td>
                    <td colSpan="2">
                      <button
                        className="btn btn-danger empty-cart"
                        onClick={() => handleClearCart(items)}
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
              onClick={handelCheckout}
              className={
                isEmpty ? "btn btn-default" : "btn btn-primary "
              }
              disabled={isEmpty}
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

export default withRouter(Cart);
