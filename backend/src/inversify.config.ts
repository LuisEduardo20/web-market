// backend/inversify.config.ts
import { Container } from 'inversify'
import TYPES from './types/types'
import { IUserService } from './interfaces/IUserService'
import { UserService } from './services/UserService'

const container = new Container()

container.bind<IUserService>(TYPES.UserService).to(UserService)

export default container
