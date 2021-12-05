import { Application, config } from '../deps.ts'
import router from './routes.ts'

const app = new Application()

app.use(router.allowedMethods())
app.use(router.routes())

app.listen({ port: Number(config().PORT) })