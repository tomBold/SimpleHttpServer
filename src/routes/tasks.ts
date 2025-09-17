import { Router, Request, Response } from 'express';
import { db } from '../database';
import { ApiResponse, Task, CreateTaskRequest, UpdateTaskRequest } from '../types';

const router = Router();

// GET /api/tasks - Get all tasks
router.get('/', (req: Request, res: Response) => {
  try {
    const { userId, completed } = req.query;
    let tasks = db.getAllTasks();

    // Filter by userId if provided
    if (userId) {
      tasks = tasks.filter(task => task.userId === userId);
    }

    // Filter by completion status if provided
    if (completed !== undefined) {
      const isCompleted = completed === 'true';
      tasks = tasks.filter(task => task.completed === isCompleted);
    }

    const response: ApiResponse<Task[]> = {
      success: true,
      data: tasks
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to fetch tasks'
    };
    res.status(500).json(response);
  }
});

// GET /api/tasks/:id - Get task by ID
router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = db.getTaskById(id);
    
    if (!task) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Task not found'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<Task> = {
      success: true,
      data: task
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to fetch task'
    };
    res.status(500).json(response);
  }
});

// POST /api/tasks - Create new task
router.post('/', (req: Request, res: Response) => {
  try {
    const taskData: CreateTaskRequest = req.body;
    
    // Basic validation
    if (!taskData.title || !taskData.userId) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Title and userId are required'
      };
      return res.status(400).json(response);
    }

    // Check if user exists
    const user = db.getUserById(taskData.userId);
    if (!user) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'User not found'
      };
      return res.status(404).json(response);
    }

    const task = db.createTask(taskData);
    const response: ApiResponse<Task> = {
      success: true,
      data: task,
      message: 'Task created successfully'
    };
    res.status(201).json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to create task'
    };
    res.status(500).json(response);
  }
});

// PUT /api/tasks/:id - Update task
router.put('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates: UpdateTaskRequest = req.body;

    const updatedTask = db.updateTask(id, updates);
    
    if (!updatedTask) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Task not found'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<Task> = {
      success: true,
      data: updatedTask,
      message: 'Task updated successfully'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to update task'
    };
    res.status(500).json(response);
  }
});

// DELETE /api/tasks/:id - Delete task
router.delete('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = db.deleteTask(id);
    
    if (!deleted) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Task not found'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<null> = {
      success: true,
      message: 'Task deleted successfully'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to delete task'
    };
    res.status(500).json(response);
  }
});

// GET /api/tasks/user/:userId - Get tasks by user ID
router.get('/user/:userId', (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const tasks = db.getTasksByUserId(userId);

    const response: ApiResponse<Task[]> = {
      success: true,
      data: tasks
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Failed to fetch user tasks'
    };
    res.status(500).json(response);
  }
});

export default router;
