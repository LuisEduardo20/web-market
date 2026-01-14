import "reflect-metadata";
import { Container } from "inversify";
import { HelloController } from "@/controllers/HelloController";
import { DatabaseService } from "@/services/DatabaseService";
import { AuthService } from "@/services/AuthService";
import { TYPES } from "@/types";

const container = new Container();
container
  .bind<HelloController>(TYPES.HelloController)
  .to(HelloController)
  .inSingletonScope();
container
  .bind<DatabaseService>(TYPES.DatabaseService)
  .to(DatabaseService)
  .inSingletonScope();
container
  .bind<AuthService>(TYPES.AuthService)
  .to(AuthService)
  .inSingletonScope();

export default container;
