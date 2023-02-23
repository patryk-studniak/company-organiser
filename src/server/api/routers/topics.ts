import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import z from "zod";

export const topicRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) =>
    ctx.prisma.topic.findMany({
      where: {
        id: ctx.session.user.id,
      },
    })
  ),
  create: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.prisma.topic.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id,
        },
      })
    ),
});
