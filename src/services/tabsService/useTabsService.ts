import { api } from "~/utils/api";
import { useSession } from "next-auth/react";

export const useTabsService = () => {
  const { data: sessionData } = useSession();
  const { data: tabs, refetch: refetchTabs } = api.tab.getAllTabs.useQuery(
    undefined,
    {
      enabled: !!sessionData?.user,
    }
  );
  const createTab = api.tab.createTab.useMutation({
    onSuccess: () => {
      void refetchTabs();
    },
  });

  return {
    createTab: createTab.mutate,
    tabs,
  };
};
