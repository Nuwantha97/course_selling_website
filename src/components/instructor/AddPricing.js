import React, { useState } from 'react';
import './AddPricing.css';
import Footer from '../Footer';

const AddPricing = () => {
  const [formData, setFormData] = useState({
    currency: 'USD',
    amount: '',
    lifetime: false,
    customTime: '',
    timeUnit: 'Weeks',
    bankAccount: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div>
        <div className="pricing-container">
        <div className="sidebar">
            <h2>Web Development Course</h2>
            <nav>
            <ul>
                <li><a href="#">Information</a></li>
                <li><a href="#">Curriculum</a></li>
                <li><a href="#" className="active">Pricing</a></li>
            </ul>
            </nav>
        </div>

        <div className="main-content">
            <h1>Pricing</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Price</label>
                <div className="price-inputs">
                <select 
                    name="currency" 
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="currency-select"
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="Amount"
                    className="amount-input"
                />
                </div>
            </div>

            <div className="form-group">
                <label>Available time After payment</label>
                <div className="time-inputs">
                <label className="checkbox-label">
                    <input
                    type="checkbox"
                    name="lifetime"
                    checked={formData.lifetime}
                    onChange={handleInputChange}
                    />
                    Lifetime
                </label>
                </div>
            </div>

            <div className="form-group">
                <label>Add custom time</label>
                <div className="custom-time-inputs">
                <input
                    type="number"
                    name="customTime"
                    value={formData.customTime}
                    onChange={handleInputChange}
                    className="time-input"
                />
                <select 
                    name="timeUnit"
                    value={formData.timeUnit}
                    onChange={handleInputChange}
                    className="time-unit-select"
                >
                    <option value="Weeks">Weeks</option>
                    <option value="Months">Months</option>
                    <option value="Years">Years</option>
                </select>
                </div>
            </div>

            <div className="form-group">
                <label>Add Bank Account</label>
                <select
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleInputChange}
                className="bank-select"
                >
                <option value="">Select Account</option>
                <option value="account1">Account 1</option>
                <option value="account2">Account 2</option>
                </select>
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="description-input"
                />
            </div>

            <button type="submit" className="save-button">Save</button>
            </form>
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default AddPricing;