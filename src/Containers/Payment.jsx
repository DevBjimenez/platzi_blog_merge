import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = ({ history }) => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;

    const paypalOtions = {
        clientId: 'AboOJ-1S7qMMJiwZIYbFmLYIe_wfMf50Foz2s9gbIthRlCrisQ3q8npUMAYHqkbZt3RHd5Hjz0B60aUm',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = (data) => {
        console.log(data);
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.push('/checkout/success')
        }
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resument del pedido:</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>
                $
                                {' '}
                                {item.price}
              </span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOtions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={() => console.log('Start Payment')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <div />
        </div>
    );
}

export default Payment;
