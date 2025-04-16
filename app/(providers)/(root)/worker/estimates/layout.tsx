"use client";

import TabMenu from "@/components/atoms/TabMenu";
import { ReactNode } from "react";

const tabs = [
  { label: "대기중인 견적", route: "/customer/estimates/pending" },
  { label: "받았던 견적", route: "/customer/estimates/received" },
];

function Layout({ children }: { children: ReactNode }) {
  // useAuthRedirect();

  return (
    <div>
      <TabMenu tabs={tabs} />
      {children}
    </div>
  );
}

export default Layout;
