import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { UserRepository } from "@/repositories/UserRepository";
import { DatabaseService } from "@/services/DatabaseService";

describe("UserRepository", () => {
  let userRepository: UserRepository;
  let dbService: DatabaseService;

  beforeEach(() => {
    // Mock DatabaseService
    dbService = {
      getPrisma: vi.fn(() => ({
        user: {
          create: vi.fn(),
          findMany: vi.fn(),
          findUnique: vi.fn(),
          update: vi.fn(),
          delete: vi.fn(),
        },
      })),
    } as any;

    userRepository = new UserRepository(dbService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should create a user", async () => {
    const newUser = {
      id: 1,
      email: "test@example.com",
      name: "Test User",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    vi.mocked(dbService.getPrisma).mockReturnValue({
      user: {
        create: vi.fn().mockResolvedValue(newUser),
      },
    } as any);

    userRepository = new UserRepository(dbService);
    const result = await userRepository.create({
      email: "test@example.com",
      name: "Test User",
    });

    expect(result).toEqual(newUser);
  });

  it("should find all users", async () => {
    const users = [
      {
        id: 1,
        email: "test1@example.com",
        name: "User 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        email: "test2@example.com",
        name: "User 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    vi.mocked(dbService.getPrisma).mockReturnValue({
      user: {
        findMany: vi.fn().mockResolvedValue(users),
      },
    } as any);

    userRepository = new UserRepository(dbService);
    const result = await userRepository.findAll();

    expect(result).toEqual(users);
  });
});
