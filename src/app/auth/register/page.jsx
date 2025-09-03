'use client';

import { useState } from 'react';
import { client, account } from '../../../lib/appwrite';

const BASE_LINK = process.env.BASE_LINK || 'http://localhost:3000';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const res = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage(`❌ Error: ${data.error || 'Something went wrong'}`);
                return;
            }

            await account.createEmailPasswordSession(formData.email, formData.password);

            await account.createVerification(`${BASE_LINK}/auth/verify`);

            await account.deleteSessions();

            setMessage('✅ Account created. Check your email for the verification link.');
        } catch (err) {
            console.error('Signup error:', err);
            setMessage(`❌ Error: ${err?.message || 'Network error. Please try again.'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Sign Up'}
                </button>
            </form>
            {message && <p style={styles.message}>{message}</p>}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: 400,
        margin: '2rem auto',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontFamily: 'sans-serif',
    },
    inputGroup: {
        marginBottom: '1rem',
    },
    message: {
        marginTop: '1rem',
        fontWeight: 'bold',
    },
};
