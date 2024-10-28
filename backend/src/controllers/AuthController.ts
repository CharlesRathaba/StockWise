import { Request, Response } from 'express';
import { User } from '../models/User';
import { getRepository } from 'typeorm';
import { generateToken, verifyToken } from '../utils/jwt';
import { hashPassword, comparePassword } from '../utils/password';

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest extends LoginRequest {
  username: string;
  role?: 'admin' | 'supplier' | 'customer';
}

export class AuthController {
  async register(req: Request<{}, {}, RegisterRequest>, res: Response) {
    try {
      const { email, password, username, role = 'customer' } = req.body; // Default role to 'customer'

      // Get User repository
      const userRepository = getRepository(User);

      // Check if user already exists
      const existingUser = await userRepository.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash password
      const hashedPassword = await hashPassword(password);

      // Create new user
      const user = userRepository.create({
        email,
        password: hashedPassword,
        username,
        role
      });
      await userRepository.save(user);

      // Generate JWT token
      const token = generateToken({
        userId: user.id,
        email: user.email,
        role: user.role
      });

      return res.status(201).json({
        message: 'User registered successfully',
        token,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          role: user.role
        }
      });
    } catch (error) {
      console.error('Registration error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async login(req: Request<{}, {}, LoginRequest>, res: Response) {
    try {
      const { email, password } = req.body;

      // Get User repository
      const userRepository = getRepository(User);

      // Find user
      const user = await userRepository.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Verify password
      const isPasswordValid = await comparePassword(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = generateToken({
        userId: user.id,
        email: user.email,
        role: user.role
      });

      return res.status(200).json({
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          role: user.role
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async me(req: Request, res: Response) {
    try {
      // User data will be attached by auth middleware
      const userId = req.user?.id;
  
      // Check if userId is defined
      if (!userId) {
        return res.status(401).json({ message: 'User not authenticated' });
      }
  
      // Get User repository
      const userRepository = getRepository(User);
  
      const user = await userRepository.findOne({ where: { id: userId } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          businessName: user.username,
          role: user.role
        }
      });
    } catch (error) {
      console.error('Get user error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  
}
