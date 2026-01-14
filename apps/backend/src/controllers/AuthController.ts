// import { injectable } from "inversify";
import {
  BaseHttpController,
  Controller,
  controller,
  httpPost,
  request,
  response,
} from "inversify-express-utils";
import { Request, Response } from "express";

@controller("/auth")
export class AuthController extends BaseHttpController {
  // @httpPost("login", authRateLimit)
  @httpPost("/login")
  public async login(
    @request() request: Request,
    @response() response: Response
  ) {
    // const dto = plainToInstance(LoginDto, request.body);
    // const { email, password } = dto;
    // logger.info("User login attempt", {
    //   email,
    //   ip: request.ip,
    //   userAgent: request.get("User-Agent"),
    // });
    // const { token, ...rest } = await this.authService.login({
    //   email,
    //   password,
    // });
    // response.cookie("token", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   maxAge: 24 * 60 * 60 * 1000,
    //   sameSite: "lax",
    // });
    // Log de auditoria para login bem-sucedido
    // logger.audit("user_logged_in", rest.user.id, "user", {
    //   email,
    //   ip: request.ip,
    // });
    return response.status(200).json({ message: "Login route" });
  }

  @httpPost("/logout")
  public logout(req: Request, res: Response) {
    res.json({ message: "Logout route" });
  }
}
