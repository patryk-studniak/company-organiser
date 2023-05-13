import { createTRPCRouter } from "~/server/api/trpc";
import { tabRouter } from "~/server/api/routers/tab";

export const appRouter = createTRPCRouter({
  tab: tabRouter,
});

export type AppRouter = typeof appRouter;
