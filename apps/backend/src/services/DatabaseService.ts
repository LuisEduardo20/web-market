import { injectable } from "inversify";
import { PrismaClient } from "@prisma/client";

@injectable()
export class DatabaseService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getPrisma(): PrismaClient {
    return this.prisma;
  }

  async connect(): Promise<void> {
    try {
      await this.prisma.$connect();
      // eslint-disable-next-line no-console
      console.log("Database connected successfully");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to connect to database:", error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}
