import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import z from "zod";
export const tabRouter = createTRPCRouter({
  getAllTabs: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.tab.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
  createTab: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      const { title } = input;

      return ctx.prisma.tab.create({
        data: {
          userId: ctx.session.user.id,
          title,
        },
      });
    }),
});
