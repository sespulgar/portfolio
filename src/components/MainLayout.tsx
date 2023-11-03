import { ReactNode } from "react";
import { NavBar } from "./NavBar";
import { Card, CardContent } from "./ui/card";
import { SideBar } from "./SideBar";

interface MainLayoutProps{
  children: ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
// export default function MainLayout() {
  return (
    <div className="h-screen">
      <NavBar/>
      <div className="hidden lg:flex mt-16 w-60 flex-col fixed inset-y-0 p-3 pr-0">
        <Card className="bg-accent h-full">
          <CardContent className="h-full px-3 pt-3 border-2 border-sky-800">
            <SideBar/>
          </CardContent>
        </Card>
      </div>
      <main className="lg:pl-60 pt-16">
        <div className="p-3 h-full">
          {children}
        </div>
      </main>
    </div>
  )
}
