import React, { useState } from 'react';
import { createCustomerAccount } from '../services/CustomerService';

const CustomerOnboarding: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {


    try {
        e.preventDefault();
        console.log('Order Submitted');
        const customer = {
            name,
            email,
            address,
          };

       const savedCus = await createCustomerAccount(customer);
       console.log('Customer created', savedCus);

    } catch (error) {
        console.error('Error while creating account', error);
    }
    // Handle form submission logic here
    console.log('Customer Acc Created:', { name, email, address });
  };

  return (
    <div>
      <h2>Customer Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Address:</label>
          <input
            type="tel"
            id="phone"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Customer</button>
      </form>
    </div>
  );
};

export default CustomerOnboarding;