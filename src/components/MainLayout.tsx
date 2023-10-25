import { ReactNode } from "react";
import { NavBar } from "./NavBar";
import { Card, CardContent } from "./ui/card";
import { SideBar } from "./SideBar";

interface MainLayoutProps{
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="tw-h-screen">
      <NavBar/>
      <div className="tw-hidden lg:tw-flex tw-mt-16 tw-w-60 tw-flex-col tw-fixed tw-inset-y-0 tw-p-3 tw-pr-0">
        <Card className="tw-bg-accent tw-h-full">
          <CardContent className="tw-h-full tw-px-3 tw-pt-3">
            <SideBar/>
          </CardContent>
        </Card>
      </div>
      <main className="lg:tw-pl-60 tw-pt-16">
        <div className="tw-p-3 tw-h-full">
          {children}
        </div>
      </main>
    </div>
  )
}
