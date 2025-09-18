// Basic validation schemas - simplified without Joi
export const createUserSchema = {
  validate: (data: any) => {
    const errors = [];
    if (!data.name || data.name.length < 2) errors.push('Name must be at least 2 characters');
    if (!data.email || !data.email.includes('@')) errors.push('Valid email is required');
    if (!data.age || data.age < 1 || data.age > 120) errors.push('Age must be between 1 and 120');
    
    return {
      error: errors.length > 0 ? { details: errors.map(msg => ({ message: msg })) } : null,
      value: data
    };
  }
};

export const updateUserSchema = {
  validate: (data: any) => {
    const errors = [];
    if (data.name && data.name.length < 2) errors.push('Name must be at least 2 characters');
    if (data.email && !data.email.includes('@')) errors.push('Valid email is required');
    if (data.age && (data.age < 1 || data.age > 120)) errors.push('Age must be between 1 and 120');
    
    return {
      error: errors.length > 0 ? { details: errors.map(msg => ({ message: msg })) } : null,
      value: data
    };
  }
};

export const createTaskSchema = {
  validate: (data: any) => {
    const errors = [];
    if (!data.title || data.title.length < 1) errors.push('Title is required');
    if (!data.userId) errors.push('User ID is required');
    
    return {
      error: errors.length > 0 ? { details: errors.map(msg => ({ message: msg })) } : null,
      value: data
    };
  }
};

export const updateTaskSchema = {
  validate: (data: any) => {
    const errors = [];
    if (data.title && data.title.length < 1) errors.push('Title cannot be empty');
    
    return {
      error: errors.length > 0 ? { details: errors.map(msg => ({ message: msg })) } : null,
      value: data
    };
  }
};

export const idParamSchema = {
  validate: (data: any) => {
    const errors = [];
    if (!data.id) errors.push('ID parameter is required');
    
    return {
      error: errors.length > 0 ? { details: errors.map(msg => ({ message: msg })) } : null,
      value: data
    };
  }
};

export const userIdParamSchema = {
  validate: (data: any) => {
    const errors = [];
    if (!data.userId) errors.push('User ID parameter is required');
    
    return {
      error: errors.length > 0 ? { details: errors.map(msg => ({ message: msg })) } : null,
      value: data
    };
  }
};

export const taskQuerySchema = {
  validate: (data: any) => {
    return { error: null, value: data };
  }
};
