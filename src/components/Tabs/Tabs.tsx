import type { FC } from "react";
import { useTabsService } from "~/services/tabsService/useTabsService";

export const Tabs: FC = () => {
  const { tabs = [] } = useTabsService();

  return (
    <>
      {tabs.map((tab) => (
        <div key={tab.id}>
          <div>title: {tab.title}</div>
          <div>dateCreated: {new Date(tab.dateCreated).toDateString()}</div>
          <div>userId: {tab.userId}</div>
          <div>tabId: {tab.id}</div>
        </div>
      ))}
    </>
  );
};
