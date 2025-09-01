import { controller, httpPost } from 'inversify-express-utils'
import { Request, Response } from 'express'

@controller('/')
export class AuthController {
  @httpPost('/login')
  public login(req: Request, res: Response) {
    const { email, password } = req.body

    if (email === 'teste@teste.com' && password === '123456') {
      return res.json({ message: 'Login realizado com sucesso!' })
    }

    return res.status(401).json({ message: 'Credenciais inválidas' })
  }
}
