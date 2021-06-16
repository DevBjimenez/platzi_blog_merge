import React, {useContext} from 'react';
import '../styles/components/Checkout.css';
import {Link} from "react-router-dom";
import AppContext from "../context/AppContext";

const Checkout = () => {
    const {state, removeFromCart} = useContext(AppContext)
    const {cart} = state

    const handleRemove = (item) =>{
        removeFromCart(item)
    }

    const handleSumTotal = () =>{
        return cart.reduce((total, currentValue) => total + currentValue.price, 0)
    }
    return (
        <div>
            <div className="Checkout">
                <div className="Checkout-content">
                    <h3>Lista de pedidos</h3>
                    {cart.map(item =>
                        <div className="Checkout-item">
                            <div className="Checkout-element">
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>
                            </div>
                            <button onClick={() => handleRemove(item)} type="button"><i className="fas fa-trash-alt" title="Eliminar"/></button>
                        </div>)
                    }
                </div>
                <div className="Checkout-sidebar">
                    <h3>Precio Total: ${handleSumTotal()}</h3>
                    <Link to="/checkout/information">
                        <button type="button">Continuar pedido</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
