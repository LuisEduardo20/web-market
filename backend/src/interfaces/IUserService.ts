// apps/backend/interfaces/IUserService.ts
export interface IUserService {
  getAll(): Promise<string[]>
}
