import { json } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

export async function POST({ request }) {
    try {
        const { email } = await request.json();
        
        // Validate email
        if (!email || !validateEmail(email)) {
            return json({ success: false, message: 'Invalid email address' }, { status: 400 });
        }
        
        // Connect to PocketBase
        const pb = new PocketBase('https://datable.pockethost.io');
        
        // Check if email already exists to avoid duplicates
        try {
            const existingRecords = await pb.collection('subscribers').getList(1, 1, {
                filter: `email="${email}"`
            });
            
            if (existingRecords.items.length > 0) {
                return json({ 
                    success: false, 
                    message: 'This email is already subscribed to our newsletter' 
                }, { status: 409 });
            }
        } catch (error) {
            console.error('Error checking for existing email:', error);
        }
        
        // Create new subscriber
        const data = { email };
        const record = await pb.collection('subscribers').create(data);
        
        return json({ 
            success: true, 
            message: 'Successfully subscribed to the newsletter!',
            id: record.id
        });
    } catch (error) {
        console.error('Subscription error:', error);
        return json({ 
            success: false, 
            message: 'An error occurred while processing your subscription'
        }, { status: 500 });
    }
}

// Simple email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
