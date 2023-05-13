import { type AppRouter, appRouter } from "~/server/api/root";
import { mockDeep } from "jest-mock-extended";
import type { PrismaClient, Tab } from "@prisma/client";
import type { Session } from "next-auth";
import type { inferProcedureInput } from "@trpc/server";

describe("Tabs", () => {
  const mockSession: Session = {
    expires: new Date().toISOString(),
    user: {
      id: "test-id",
      name: "test-name",
    },
  };

  test("get all tabs returns list of all tabs", async () => {
    const prismaMock = mockDeep<PrismaClient>();
    const mockOutput: Tab[] = [
      {
        id: "test-id",
        userId: "test-id",
        title: "test-title",
        dateCreated: new Date("Sat, 13 May 2023 05:57:15 GMT"),
      },
    ];
    prismaMock.tab.findMany.mockResolvedValue(mockOutput);

    const caller = appRouter.createCaller({
      session: mockSession,
      prisma: prismaMock,
    });

    const result = await caller.tab.getAllTabs();

    expect(result).toStrictEqual(mockOutput);
  });

  test("create tab creates new tab in a db", async () => {
    const prismaMock = mockDeep<PrismaClient>();
    type ResolvedInput = inferProcedureInput<AppRouter["tab"]["createTab"]>;

    const input: ResolvedInput = {
      title: "test-title",
    };

    const caller = appRouter.createCaller({
      session: mockSession,
      prisma: prismaMock,
    });

    await caller.tab.createTab(input);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(prismaMock.tab.create).toHaveBeenCalledWith({
      data: {
        ...input,
        userId: mockSession.user.id,
      },
    });
  });
});
