import React, { useState } from 'react';
import './Payment.css';
import { Pencil, Trash2 } from 'lucide-react';

const Payment = () => {
  const [bankAccounts, setBankAccounts] = useState([
    {
      id: 1,
      name: 'account 1',
      accountNumber: '**********123',
      accountName: 'Nuwantha',
      bankName: 'BOC',
      branchName: 'Kandy'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    accountName: '',
    accountNumber: '',
    bankName: '',
    branchName: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleEdit = (id) => {
    console.log('Edit account:', id);
    // Add edit logic here
  };

  const handleDelete = (id) => {
    console.log('Delete account:', id);
    // Add delete logic here
  };

  return (
    <div className="payment-container">
      <nav className="top-nav">
        <div className="nav-logo"></div>
        <div className="nav-links">
          <a href="#">My Courses</a>
          <a href="#" className="active">Payment</a>
          <a href="#">Notification</a>
        </div>
        <div className="nav-right">
          <select className="instructor-select">
            <option>Instructor</option>
          </select>
          <div className="user-avatar">N</div>
        </div>
      </nav>

      <div className="content">
        <h1>Payment</h1>

        <div className="accounts-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Account Number</th>
                <th>Account Name</th>
                <th>Bank Name</th>
                <th>Branch Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bankAccounts.map(account => (
                <tr key={account.id}>
                  <td>{account.name}</td>
                  <td>{account.accountNumber}</td>
                  <td>{account.accountName}</td>
                  <td>{account.bankName}</td>
                  <td>{account.branchName}</td>
                  <td>
                    <button 
                      className="action-button edit"
                      onClick={() => handleEdit(account.id)}
                    >
                      <Pencil size={16} />
                    </button>
                    <button 
                      className="action-button delete"
                      onClick={() => handleDelete(account.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="add-account-form">
          <h2>Add Bank Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Bank Account Name</label>
              <input
                type="text"
                name="accountName"
                value={formData.accountName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Bank Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Branch Name</label>
              <input
                type="text"
                name="branchName"
                value={formData.branchName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="register-button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;