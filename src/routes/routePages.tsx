import React from "react";
import { Outlet} from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { routes } from "./routes";

export const RoutePages = () => {
  const ContextProvider = routes.context  || React.Fragment;
  return (
    <ContextProvider>
      <MainLayout>
        <Outlet/>
      </MainLayout>
    </ContextProvider>
  );
};
