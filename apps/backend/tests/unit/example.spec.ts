import { describe, it, expect } from "vitest";
import container from "@/inversify.config";
import { TYPES } from "@/types";
import { HelloController } from "@/controllers/HelloController";

describe("backend sample", () => {
  it("should resolve HelloController from container", () => {
    const controller = container.get<HelloController>(TYPES.HelloController);
    expect(controller).toBeDefined();
  });
});
