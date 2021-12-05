import { Router } from '../../../deps.ts'
import { UserController } from './user.controller.ts'

const userRouter = new Router()
const { getAllUsers } = UserController

userRouter.get('/user/', getAllUsers)

export default userRouter