import React from 'react';
import { useCart } from "react-use-cart";
import { withRouter } from 'react-router';
import { propTypes } from 'react-bootstrap/esm/Image';

const SingleProduct = (props ) => {
    const { addItem } = useCart();

   return (
     <div>
 <h1>Hello {props.match.params.id}</h1>
     </div>
   
   
  );
}
export default withRouter(SingleProduct);