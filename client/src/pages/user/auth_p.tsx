import React, { useState, useEffect } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const users: { [key: string]: string } = {
        "user@example.com": "password123",
        "admin@example.com": "adminpass"
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission

        // Basic validation
        if (!email || !password) {
            setMessage('Please fill in both email and password.');
            return;
        }

        // Basic email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        // Check credentials
        if (users[email] && users[email] === password) {
            setMessage('Login successful!');
        } else {
            setMessage('Invalid email or password.');
        }
    };

    // Clear message when email or password changes
    useEffect(() => {
        setMessage('');
    }, [email, password]);

    return (
        <div style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
                        aria-label="Email"
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
                        aria-label="Password"
                        required
                    />
                </div>
                <button type="submit" style={{ padding: '8px 16px' }}>
                    Login
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;