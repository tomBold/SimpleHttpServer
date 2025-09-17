import { Router, Request, Response } from 'express';
import { db } from '../database';
import { ApiResponse, User, CreateUserRequest, UpdateUserRequest } from '../types';

const router = Router();

// GET /api/users - Get all users
router.get('/', (req: Request, res: Response) => {
  try {
    const users = db.getAllUsers();
    const response: ApiResponse<User[]> = {
      success: true,
      data: users
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to fetch users'
    };
    res.status(500).json(response);
  }
});

// GET /api/users/:id - Get user by ID
router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = db.getUserById(id);
    
    if (!user) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'User not found'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<User> = {
      success: true,
      data: user
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to fetch user'
    };
    res.status(500).json(response);
  }
});

// POST /api/users - Create new user
router.post('/', (req: Request, res: Response) => {
  try {
    const userData: CreateUserRequest = req.body;
    
    // Basic validation
    if (!userData.name || !userData.email || !userData.age) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Name, email, and age are required'
      };
      return res.status(400).json(response);
    }

    // Check if email already exists
    const existingUser = db.getAllUsers().find(user => user.email === userData.email);
    if (existingUser) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Email already exists'
      };
      return res.status(409).json(response);
    }

    const user = db.createUser(userData);
    const response: ApiResponse<User> = {
      success: true,
      data: user,
      message: 'User created successfully'
    };
    res.status(201).json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to create user'
    };
    res.status(500).json(response);
  }
});

// PUT /api/users/:id - Update user
router.put('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates: UpdateUserRequest = req.body;

    const updatedUser = db.updateUser(id, updates);
    
    if (!updatedUser) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'User not found'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<User> = {
      success: true,
      data: updatedUser,
      message: 'User updated successfully'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to update user'
    };
    res.status(500).json(response);
  }
});

// DELETE /api/users/:id - Delete user
router.delete('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = db.deleteUser(id);
    
    if (!deleted) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'User not found'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<null> = {
      success: true,
      message: 'User deleted successfully'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to delete user'
    };
    res.status(500).json(response);
  }
});

export default router;
