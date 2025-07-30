// apps/backend/services/UserService.ts
import { injectable } from 'inversify'
import { IUserService } from '../interfaces/IUserService'

@injectable()
export class UserService implements IUserService {
  async getAll(): Promise<string[]> {
    return ['User 1', 'User 2']
  }
}
