import { client, account, databases } from '../../../lib/appwrite'
import { ID } from 'appwrite';
const BASE_LINK = process.env.BASE_LINK || 'http://localhost:3000';

export async function verifyEmail(userId, secret) {
    try {
        const response = await account.updateVerification(userId, secret);
        return response;
    } catch (error) {
        throw error;
    }
}
export async function registerUser(email, password, name) {
    try {
        const user = await account.create(ID.unique(), email, password, name);

        return user;
    } catch (error) {
        throw error;
    }
}


