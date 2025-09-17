// Base entity interface
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// User model
export interface User extends BaseEntity {
  name: string;
  email: string;
  age: number;
}

// Task model
export interface Task extends BaseEntity {
  title: string;
  description: string;
  completed: boolean;
  userId: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Request types
export interface CreateUserRequest {
  name: string;
  email: string;
  age: number;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  age?: number;
}

export interface CreateTaskRequest {
  title: string;
  description: string;
  userId: string;
}

export interface UpdateTaskRequest {
  title?: string;
  description?: string;
  completed?: boolean;
}
