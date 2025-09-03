'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function VerifyPage() {
    const searchParams = useSearchParams();
    const [message, setMessage] = useState('Verifying...');

    useEffect(() => {
        const userId = searchParams.get('userId');
        const secret = searchParams.get('secret');

        if (userId && secret) {
            fetch('/api/auth', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, secret }),
            })
            .then(res => res.json())
            .then(data => {
                if (data && data.$id) {
                    setMessage('Email verified successfully!');
                } else {
                    setMessage(`Verification failed: ${data.error || 'Unknown error'}`);
                }
            })
            .catch(err => {
                setMessage('Error verifying email');
                console.error(err);
            });
        } else {
            setMessage('Missing verification parameters.');
        }
    }, [searchParams]);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}
