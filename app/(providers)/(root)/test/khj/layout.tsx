import TabMenu from "@/components/atoms/TabMenu";
import { ReactNode } from "react";

const tabs = [
  { label: "대기중인 견적", route: "/test/page1" },
  { label: "받았던 견적", route: "/test/page2" },
];

function Layout({ children }: { children: ReactNode }) {
  // useAuthRedirect();

  return (
    <div className="mx-auto w-[1000px]">
      <TabMenu tabs={tabs} />
      {children}
    </div>
  );
}

export default Layout;
