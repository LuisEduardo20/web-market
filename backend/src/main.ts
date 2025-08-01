import 'reflect-metadata'
import { InversifyExpressServer } from 'inversify-express-utils'
import container from './inversify.config'
import './controllers/UserController'

const port = process.env.PORT ? Number(process.env.PORT) : 3000

const server = new InversifyExpressServer(container)
const app = server.build()

app.listen(port, () => console.log(`Server running on port ${port}`))
app.get('/', (req, res) => {
  res.send({ message: 'Working fine' }).status(200)
})
