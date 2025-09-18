import { Router } from 'express';
import { TaskController } from '../controllers/taskController';
import { validate } from '../middleware/validation';
import { createTaskSchema, updateTaskSchema, idParamSchema, userIdParamSchema, taskQuerySchema } from '../validation/schemas';

const router = Router();
const taskController = new TaskController();

router.get('/', validate(taskQuerySchema, 'query'), taskController.getAllTasks);
router.get('/:id', validate(idParamSchema, 'params'), taskController.getTaskById);
router.get('/user/:userId', validate(userIdParamSchema, 'params'), taskController.getTasksByUserId);
router.post('/', validate(createTaskSchema), taskController.createTask);
router.put('/:id', validate(idParamSchema, 'params'), validate(updateTaskSchema), taskController.updateTask);
router.delete('/:id', validate(idParamSchema, 'params'), taskController.deleteTask);

export default router;
