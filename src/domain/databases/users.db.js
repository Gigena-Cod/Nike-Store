/**
 * Database of registered users
 * @module UsersDB
 */

export const usersDB = [
  {
    id: "user1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "securepassword123", // In a real application, this should be hashed
    lastLogin: null,
    loginCount: 0
  },
  {
    id: "user2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    password: "securepassword456",
    lastLogin: null,
    loginCount: 0
  },
  {
    id: "user3",
    firstName: "Mike",
    lastName: "Johnson",
    email: "mike.johnson@example.com",
    password: "securepassword789",
    lastLogin: null,
    loginCount: 0
  }
];

/**
 * Find user by email
 * @param {string} email - User's email
 * @returns {Object|null} User object or null if not found
 */
export function findUserByEmail(email) {
  return usersDB.find(user => user.email === email);
}

/**
 * Update user login information
 * @param {string} email - User's email
 * @param {Date} loginTime - Time of login
 */
export function updateLoginInfo(email, loginTime) {
  const user = findUserByEmail(email);
  if (user) {
    user.lastLogin = loginTime;
    user.loginCount += 1;
  }
}

/**
 * Get user login history
 * @param {string} email - User's email
 * @returns {Object} Login information
 */
export function getLoginHistory(email) {
  const user = findUserByEmail(email);
  if (user) {
    return {
      lastLogin: user.lastLogin,
      loginCount: user.loginCount
    };
  }
  return null;
}
