import { usersDB, findUserByEmail, updateLoginInfo, getLoginHistory } from '../../databases/users.db.js';

export class AuthService {
    constructor() {
        this.auth = null;
    }

    /**
     * Sign in user
     * @param {string} email - User's email
     * @param {string} password - User's password
     * @returns {Promise<Object>} User data
     * @throws {Error} If credentials are invalid
     */
    async signIn(email, password) {
        try {
            // Find user in database
            const user = findUserByEmail(email);

            if (!user || user.password !== password) {
                throw new Error('Invalid email or password');
            }

            // Update login information
            const loginTime = new Date();
            updateLoginInfo(email, loginTime);

            // Set auth state
            this.auth = {
                ...user,
                lastLogin: loginTime
            };

            return this.auth;
        } catch (error) {
            console.error('Error signing in:', error);
            throw error;
        }
    }

    /**
     * Get user login history
     * @returns {Object} Login information
     */
    getLoginHistory() {
        if (!this.auth) {
            throw new Error('User not authenticated');
        }
        return getLoginHistory(this.auth.email);
    }

    /**
     * Check if user is authenticated
     * @returns {boolean} Authentication status
     */
    isAuthenticated() {
        return !!this.auth;
    }

    /**
     * Sign out user
     */
    signOut() {
        this.auth = null;
    }
}
