import { injectable, inject } from "inversify";
import { PrismaClient, User } from "@prisma/client";
import { TYPES } from "@/types";
import { DatabaseService } from "@/services/DatabaseService";

@injectable()
export class UserRepository {
  private prisma: PrismaClient;

  constructor(
    @inject(TYPES.DatabaseService) private dbService: DatabaseService
  ) {
    this.prisma = this.dbService.getPrisma();
  }

  async create(data: { email: string; name?: string }): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(
    id: number,
    data: {
      email?: string;
      name?: string;
    }
  ): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
