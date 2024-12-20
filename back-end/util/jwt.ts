import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Role } from '../types';

// Secret key to sign the JWT token (store this securely in environment variables)
const jwtSecret = process.env.JWT_SECRET;

interface JWTPayload {
  username: string;
  role: Role;
}

if (!jwtSecret) {
    console.error('JWT_SECRET is not defined! Please check your .env file.');
    process.exit(1); // Exit the application if the secret is not found
  }
  

/**
 * Function to generate a JWT token
 * @param username - The username to encode into the token
 * @returns The signed JWT token
 */
export function generateJWTToken(username: string, role: Role): string {
  const payload: JWTPayload = { username, role };
  const JWT_SECRET = process.env.JWT_SECRET;
  // Sign the token with a payload, secret, and optional expiration time
  const token = jwt.sign(payload, "e495c6d982108bd1d2d697edb1fe77b55f96d8f04de03e7b04a000e88098d84e3d6e20dd22a3f579c7612aa21c6c65625c0d2aefaf29b308d36462da1f3672d8e570776e30394ce9d1c5b47fba229748b77aaed762980500508af1b3f648e2c5", { expiresIn: '8h' }); // Set expiry time as 1 hour (can be adjusted)
  
  return token;
}