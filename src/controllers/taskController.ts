import { Request, Response, NextFunction } from 'express';
import { db } from '../database';
import { ApiResponse, Task } from '../types';

export class TaskController {
  getAllTasks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { userId, completed } = req.query;
      let tasks = db.getAllTasks();

      if (userId) {
        tasks = tasks.filter((task: Task) => task.userId === userId);
      }

      if (completed !== undefined) {
        const isCompleted = completed === 'true';
        tasks = tasks.filter((task: Task) => task.completed === isCompleted);
      }

      res.json({ success: true, data: tasks });
    } catch (error) {
      next(error);
    }
  };

  getTaskById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const task = db.getTaskById(id);
      
      if (!task) {
        res.status(404).json({ success: false, error: 'Task not found' });
        return;
      }

      res.json({ success: true, data: task });
    } catch (error) {
      next(error);
    }
  };

  getTasksByUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { userId } = req.params;
      const tasks = db.getTasksByUserId(userId);
      res.json({ success: true, data: tasks });
    } catch (error) {
      next(error);
    }
  };

  createTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const taskData = req.body;
      
      if (!taskData.title || !taskData.userId) {
        res.status(400).json({ success: false, error: 'Title and userId are required' });
        return;
      }

      const user = db.getUserById(taskData.userId);
      if (!user) {
        res.status(404).json({ success: false, error: 'User not found' });
        return;
      }

      const task = db.createTask(taskData);
      res.status(201).json({ success: true, data: task, message: 'Task created successfully' });
    } catch (error) {
      next(error);
    }
  };

  updateTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const updates = req.body;

      const updatedTask = db.updateTask(id, updates);
      
      if (!updatedTask) {
        res.status(404).json({ success: false, error: 'Task not found' });
        return;
      }

      res.json({ success: true, data: updatedTask, message: 'Task updated successfully' });
    } catch (error) {
      next(error);
    }
  };

  deleteTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const deleted = db.deleteTask(id);
      
      if (!deleted) {
        res.status(404).json({ success: false, error: 'Task not found' });
        return;
      }

      res.json({ success: true, message: 'Task deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}
