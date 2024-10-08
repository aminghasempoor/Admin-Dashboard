import { NextResponse } from 'next/server';

export async function GET() {
    const userData = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        phone_number: '+123456789',
        avatar: '/avatarphoto.png',
        national_id: '1234567890',
        position: 'Software Engineer',
        province_id: '1',
        province_name: 'Ontario',
        city_id: '101',
        city_name: 'Toronto',
        role: 'admin',
        permissions: ['create', 'edit', 'delete', 'view']
    };

    return NextResponse.json(userData);
}