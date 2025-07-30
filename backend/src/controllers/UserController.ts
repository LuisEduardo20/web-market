// apps/backend/controllers/UserController.ts
import { controller, httpGet } from 'inversify-express-utils'
import { inject } from 'inversify'
import { IUserService } from '../interfaces/IUserService'
import TYPES from '../types/types'
import { Request, Response } from 'express'

@controller('/users')
export class UserController {
  constructor(@inject(TYPES.UserService) private userService: IUserService) {}

  @httpGet('/')
  public async getUsers(req: Request, res: Response) {
    const users = await this.userService.getAll()
    res.json(users)
  }
}
