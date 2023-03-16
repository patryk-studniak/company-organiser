import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import z from "zod";
export const expenseRouter = createTRPCRouter({
  getAllGroups: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.expenseGroup.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
  getAllExpenses: protectedProcedure
    .input(z.object({ groupId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.expense.findMany({
        where: {
          group: {
            id: input.groupId,
          },
        },
      });
    }),
  createGroup: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.expenseGroup.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id,
        },
      });
    }),
});
