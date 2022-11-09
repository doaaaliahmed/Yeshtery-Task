import "../sass/main.scss";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import Tshirt from '../images/adidas-1/T-shirt-1.jpg';

const Cart = (props) => {
 


  const Overlay = (props) => {
    return <div className="overlay" onClick={props.onClick}></div>;
  };

  const CartModal = (props) => {
    return (
      <div className="cart-modal">
        <h2>My Cart</h2>
        <h4>Cart Summary</h4>

     <div className="cart-container">

           <div className="img-container">
             <img src={Tshirt} alt="" />
           </div>
           <div className="cart-details">
         <p className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            <p>
              size: <span>small</span>
            </p>
             <p>
             quantity: <span>1</span>
           </p>
            <p>
              price: <span>9.999 LE</span>
            </p>
           </div>
         </div> 
     
      </div>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay  onClick={props.onClickCart}/>, document.getElementById("overlay"))};
      <CartModal />
    </Fragment>
  );
};

export default Cart;
