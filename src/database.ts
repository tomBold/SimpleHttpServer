import { User, Task, CreateUserRequest, UpdateUserRequest, CreateTaskRequest, UpdateTaskRequest } from './types';

// In-memory database
class InMemoryDatabase {
  private users: Map<string, User> = new Map();
  private tasks: Map<string, Task> = new Map();
  private nextUserId = 1;
  private nextTaskId = 1;

  // User operations
  createUser(userData: CreateUserRequest): User {
    const id = this.nextUserId.toString();
    const now = new Date();
    
    const user: User = {
      id,
      ...userData,
      createdAt: now,
      updatedAt: now
    };
    
    this.users.set(id, user);
    this.nextUserId++;
    return user;
  }

  getUserById(id: string): User | undefined {
    return this.users.get(id);
  }

  getAllUsers(): User[] {
    return Array.from(this.users.values());
  }

  updateUser(id: string, updates: UpdateUserRequest): User | undefined {
    const user = this.users.get(id);
    if (!user) return undefined;

    const updatedUser: User = {
      ...user,
      ...updates,
      updatedAt: new Date()
    };

    this.users.set(id, updatedUser);
    return updatedUser;
  }

  deleteUser(id: string): boolean {
    return this.users.delete(id);
  }

  // Task operations
  createTask(taskData: CreateTaskRequest): Task {
    const id = this.nextTaskId.toString();
    const now = new Date();
    
    const task: Task = {
      id,
      ...taskData,
      completed: false,
      createdAt: now,
      updatedAt: now
    };
    
    this.tasks.set(id, task);
    this.nextTaskId++;
    return task;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.get(id);
  }

  getAllTasks(): Task[] {
    return Array.from(this.tasks.values());
  }

  getTasksByUserId(userId: string): Task[] {
    return Array.from(this.tasks.values()).filter(task => task.userId === userId);
  }

  updateTask(id: string, updates: UpdateTaskRequest): Task | undefined {
    const task = this.tasks.get(id);
    if (!task) return undefined;

    const updatedTask: Task = {
      ...task,
      ...updates,
      updatedAt: new Date()
    };

    this.tasks.set(id, updatedTask);
    return updatedTask;
  }

  deleteTask(id: string): boolean {
    return this.tasks.delete(id);
  }

  // Utility methods
  getStats() {
    return {
      users: this.users.size,
      tasks: this.tasks.size,
      completedTasks: Array.from(this.tasks.values()).filter(task => task.completed).length
    };
  }

  // Seed some initial data
  seedData() {
    // Create sample users
    const user1 = this.createUser({
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    });

    const user2 = this.createUser({
      name: 'Jane Smith',
      email: 'jane@example.com',
      age: 25
    });

    // Create sample tasks
    this.createTask({
      title: 'Learn TypeScript',
      description: 'Complete TypeScript tutorial',
      userId: user1.id
    });

    this.createTask({
      title: 'Build REST API',
      description: 'Create a simple REST API with Node.js',
      userId: user1.id
    });

    this.createTask({
      title: 'Write Documentation',
      description: 'Document the API endpoints',
      userId: user2.id
    });

    console.log('📊 Database seeded with sample data');
  }
}

// Export singleton instance
export const db = new InMemoryDatabase();
