import { controller, httpGet } from 'inversify-express-utils'
import { Request, Response } from 'express'

@controller('/hello')
export class HelloController {
  @httpGet('/')
  public index(req: Request, res: Response) {
    res.json({ message: 'Hello World from Nx Backend!' })
  }
}
