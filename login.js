import mongoose from 'mongoose';
import { User } from './model/mongodb.js';

/**
 * Asynchronously logs in a user by verifying their email/username and password.
 *
 * This function attempts to find a user in the database matching the provided email
 * and password. If a matching user is found, the user's information is logged to the console.
 *
 * @param {string} identifier - The email or username of the user trying to log in.
 * @param {string} password - The password of the user trying to log in.
 * @returns {Promise<void>} - A promise that resolves when the login operation is complete.
 */
async function login(identifier, password) {
  const result = await User.find({
    $or: [
      { email: identifier },
      { username: identifier }
    ],
      password: password
    });
  console.log(result);
}

/**
 * Asynchronously registers a new user by saving their information to the database.
 *
 * This function creates a new user object with the provided username, password, and email.
 * It then attempts to save this user object to the database. If the save operation is
 * successful, the newly created user's information is logged to the console. If there
 * is an error during the save operation, the error message is logged to the console.
 *
 * @param {string} username - The desired username for the new user.
 * @param {string} password - The desired password for the new user.
 * @param {string} email - The email address for the new user.
 * @returns {Promise<void>} - A promise that resolves when the sign-in operation is complete.
 */
async function signin(email, username, password) {
  const newUser = new User({
    username: username,
    password: password,
    email: email,
  });

  newUser.save()
    .then(user => console.log('User saved:', user))
    .catch(err => console.error('Error saving user:', err.keyValue));
}

export { login , signin }