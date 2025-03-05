import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoginComponent: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const session = localStorage.getItem('session');
        if (session) {
            const parsedSession = JSON.parse(session);
            console.log('Email from session:', parsedSession.email);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3002/customer/${email}`);
            const customer = response.data;

            const session = {
                customerId: customer.id,
                name: customer.name,
                email: customer.email,
            };

            localStorage.setItem('session', JSON.stringify(session));
            console.log('Login successful', session);
            setError(null);
        } catch (error) {
            console.error('Error during login', error);
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default LoginComponent;