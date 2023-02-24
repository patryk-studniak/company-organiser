import { type AppRouter, appRouter } from "~/server/api/root";
import { mockDeep } from "jest-mock-extended";
import type { PrismaClient, Topic } from "@prisma/client";
import type { Session } from "next-auth";
import type { inferProcedureInput } from "@trpc/server";

describe("Topics", () => {
  const mockSession: Session = {
    expires: new Date().toISOString(),
    user: {
      id: "test-id",
      name: "test-name",
    },
  };

  test("get all topics returns list of topics", async () => {
    const prismaMock = mockDeep<PrismaClient>();
    const mockOutput: Topic[] = [
      {
        id: "test-id",
        userId: "test-userId",
        title: "test-title",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    prismaMock.topic.findMany.mockResolvedValue(mockOutput);

    const caller = appRouter.createCaller({
      session: mockSession,
      prisma: prismaMock,
    });

    const result = await caller.topic.getAll();

    expect(result).toStrictEqual(mockOutput);
  });

  test("create topic creates new topic in a db", async () => {
    const prismaMock = mockDeep<PrismaClient>();
    type ResolvedInput = inferProcedureInput<AppRouter["topic"]["create"]>;

    const input: ResolvedInput = {
      title: "test-title",
    };

    const caller = appRouter.createCaller({
      session: mockSession,
      prisma: prismaMock,
    });

    await caller.topic.create(input);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(prismaMock.topic.create).toHaveBeenCalledWith({
      data: {
        ...input,
        userId: mockSession.user.id,
      },
    });
  });
});
