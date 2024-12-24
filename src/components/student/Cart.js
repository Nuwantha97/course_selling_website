import React from 'react';
import './Cart.css';
import Footer from '../Footer';
import Header from './Header';
import SecondHeader from './SecondHeader';

const Cart = () => {
  const cartItems = [
    { id: 1, title: "Python Programming Course", description: "Learn Python from scratch", price: 5.00 },
    { id: 2, title: "Web Development Bootcamp", description: "Full-stack web development", price: 10.00 },
    { id: 3, title: "Machine Learning Basics", description: "Introduction to ML concepts", price: 6.00 }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
        <Header/>
        <SecondHeader/>
        <div className="cart-container">

        <h1>Shopping Cart</h1>

        <div className="cart-content">
            <div className="cart-items">
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                <div className="item-image"></div>
                <div className="item-details">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
                <div className="item-price">${item.price.toFixed(2)}</div>
                </div>
            ))}
            </div>

            <div className="cart-summary">
            <h2>Total</h2>
            <div className="total-amount">${total.toFixed(2)}</div>
            <button className="pay-now-btn">Pay now</button>
            </div>
        </div>

        <section className="learn-with-us">
            <h2>Learn With us.</h2>
            <div className="learn-image">
            <img src="/api/placeholder/800/400" alt="Learning illustration" />
            </div>
        </section>
        </div>
    <Footer/>
    </div>
  );
};

export default Cart;