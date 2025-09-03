import { registerUser, verifyEmail } from './register';
import { NextResponse } from 'next/server';

//regusteer
export async function POST(request) {
    try {
        const body = await request.json();
        const { email, password, name } = body;

        const user = await registerUser(email, password, name);

        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(request) {
    try {
        const body = await request.json();
        const { userId, secret } = body;

        const user = await verifyEmail(userId, secret);

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}