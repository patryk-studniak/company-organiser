import { type AppRouter, appRouter } from "~/server/api/root";
import { mockDeep } from "jest-mock-extended";
import type { PrismaClient, Expense, ExpenseGroup } from "@prisma/client";
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

  test("get all expenses groups returns list of expenses groups with expenses", async () => {
    const prismaMock = mockDeep<PrismaClient>();
    const mockOutput: ExpenseGroup[] = [
      {
        id: "test-id",
        userId: "test-id",
        title: "test-title",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    prismaMock.expenseGroup.findMany.mockResolvedValue(mockOutput);

    const caller = appRouter.createCaller({
      session: mockSession,
      prisma: prismaMock,
    });

    const result = await caller.expenseGroup.getAllGroups();

    expect(result).toStrictEqual(mockOutput);
  });

  test("get all expenses for given group and returns with expenses", async () => {
    const prismaMock = mockDeep<PrismaClient>();
    const mockOutput: Expense[] = [
      {
        id: "test-id",
        expenseId: "test-userId",
        title: "test-title",
        createdAt: new Date(),
        updatedAt: new Date(),
        cost: 123,
        description: "test-description",
      },
    ];
    prismaMock.expense.findMany.mockResolvedValue(mockOutput);

    const caller = appRouter.createCaller({
      session: mockSession,
      prisma: prismaMock,
    });

    const result = await caller.expenseGroup.getAllExpenses({
      groupId: "test-group-id",
    });

    expect(result).toStrictEqual(mockOutput);
  });

  test("create topic creates new topic in a db", async () => {
    const prismaMock = mockDeep<PrismaClient>();
    type ResolvedInput = inferProcedureInput<
      AppRouter["expenseGroup"]["createGroup"]
    >;

    const input: ResolvedInput = {
      title: "test-title",
    };

    const caller = appRouter.createCaller({
      session: mockSession,
      prisma: prismaMock,
    });

    await caller.expenseGroup.createGroup(input);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(prismaMock.expenseGroup.create).toHaveBeenCalledWith({
      data: {
        ...input,
        userId: mockSession.user.id,
      },
    });
  });
});
