import { injectable } from "inversify";
import { Request, Response } from "express";

@injectable()
export class HelloController {
  public hello(req: Request, res: Response) {
    res.json({ message: "Hello from backend" });
  }
}
