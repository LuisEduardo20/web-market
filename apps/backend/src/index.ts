import "reflect-metadata";
import "dotenv/config";
import express from "express";
import container from "@/inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";
import { TYPES } from "@/types";
import { HelloController } from "@/controllers/HelloController";
import { DatabaseService } from "@/services/DatabaseService";
import "@/controllers/AuthController";

const server = new InversifyExpressServer(container);
const port = process.env.PORT || 3000;

const helloCtrl = container.get<HelloController>(TYPES.HelloController);
const dbService = container.get<DatabaseService>(TYPES.DatabaseService);

server.setConfig((app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
});

// server.setErrorConfig((app) => {
//   app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send("Something broke!");
//   });
// });

const app = server.build();
// app.get("/hello", (req, res) => helloCtrl.hello(req, res));

//? Connect to database and start server
(async () => {
  try {
    await dbService.connect();

    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Backend listening on http://localhost:${port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to start server:", error);
    process.exit(1);
  }
})();
