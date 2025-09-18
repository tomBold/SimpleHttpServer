import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { validate } from '../middleware/validation';
import { createUserSchema, updateUserSchema, idParamSchema } from '../validation/schemas';

const router = Router();
const userController = new UserController();

router.get('/', userController.getAllUsers);
router.get('/:id', validate(idParamSchema, 'params'), userController.getUserById);
router.post('/', validate(createUserSchema), userController.createUser);
router.put('/:id', validate(idParamSchema, 'params'), validate(updateUserSchema), userController.updateUser);
router.delete('/:id', validate(idParamSchema, 'params'), userController.deleteUser);

export default router;
