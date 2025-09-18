import { Request, Response, NextFunction } from 'express';

export const validate = (schema: any, property: 'body' | 'query' | 'params' = 'body') => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errorMessage = error.details.map((detail: any) => detail.message).join(', ');
      res.status(400).json({
        success: false,
        error: errorMessage
      });
      return;
    }

    req[property] = value;
    next();
  };
};
