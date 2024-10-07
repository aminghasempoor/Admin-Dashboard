import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        // Parse the request body to extract email, password, and confirmPassword
        const { email, password, confirmPassword } = await req.json();
        // Validation for missing fields
        if (!email || !password || !confirmPassword) {
            return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
        }

        // Basic email validation (can be improved)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
        }

        // Check if password matches confirmPassword
        if (password !== confirmPassword) {
            return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 });
        }

        // Validate password strength (optional but recommended)
        if (password.length < 6) {
            return NextResponse.json({ message: 'Password should be at least 6 characters long' }, { status: 400 });
        }

        // Simulate successful response (you can add additional logic as needed)
        return NextResponse.json({ message: 'Registration successful' }, { status: 200 });

    } catch (error) {
        // Catch and handle any unexpected errors
        return NextResponse.json({ message: 'Invalid request format or server error' }, { status: 500 });
    }
}
