import { Router } from '../deps.ts'
import userRouter from './api/users/user.route.ts'

const router = new Router();

router.use(userRouter.routes())

export default router