import "reflect-metadata";
import { Container } from "inversify";
import { HelloController } from "@/controllers/HelloController";
import { DatabaseService } from "@/services/DatabaseService";
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

export default container;
