import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const router = Router();

router.get('/', UsersController.index);
router.post('/', UsersController.create);

export default router;
