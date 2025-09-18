import { Request, Response, NextFunction } from 'express';
import { db } from '../database';
import { User } from '../types';

export class UserController {
  getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = db.getAllUsers();
      res.json({ success: true, data: users });
    } catch (error) {
      next(error);
    }
  };

  getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const user = db.getUserById(id);
      
      if (!user) {
        res.status(404).json({ success: false, error: 'User not found' });
        return;
      }

      res.json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  };

  createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData = req.body;
      
      if (!userData.name || !userData.email || !userData.age) {
        res.status(400).json({ success: false, error: 'Name, email, and age are required' });
        return;
      }

      const existingUser = db.getAllUsers().find((user: User) => user.email === userData.email);
      if (existingUser) {
        res.status(409).json({ success: false, error: 'Email already exists' });
        return;
      }

      const user = db.createUser(userData);
      res.status(201).json({ success: true, data: user, message: 'User created successfully' });
    } catch (error) {
      next(error);
    }
  };

  updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const updates = req.body;

      const updatedUser = db.updateUser(id, updates);
      
      if (!updatedUser) {
        res.status(404).json({ success: false, error: 'User not found' });
        return;
      }

      res.json({ success: true, data: updatedUser, message: 'User updated successfully' });
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const deleted = db.deleteUser(id);
      
      if (!deleted) {
        res.status(404).json({ success: false, error: 'User not found' });
        return;
      }

      res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}
