import { SideBar } from "@/components/SideBar";
import { NavBar } from "../components/NavBar";
import { CardWithForm } from "./CardWithForm";
import { Outlet } from "react-router";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
