import { About } from "@/pages/About";
import { CardWithForm } from "@/pages/CardWithForm";
import { Contact } from "@/pages/Contact";
import { ErrorPage } from "@/pages/ErrorPage";
import { Experience } from "@/pages/Experience";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";

type RouteChildProps = {
  label: string, 
  path: string, 
  element: ReactNode | null,
  icon?: LucideIcon
}

export type RouteProps = { 
  defaultPath: string, 
  context?: any | null,
  children: RouteChildProps[],
  path: string,
}

export const routes : RouteProps = ({
  defaultPath: "",
  context: null,
  path: "/",
  children: [
    { 
      label: "Home", 
      path: "/", 
      element: <Home/>,
    },
    { 
      label: "About", 
      path: "/about", 
      element: <About/>,
    },
    { 
      label: "Contact", 
      path: "/contact", 
      element: <Contact/>,
    },
    { 
      label: "Test", 
      path: "/test", 
      element: <CardWithForm/>,
    },
    { 
      label: "Projects", 
      path: "/project", 
      element: <Projects/>,
    },
  ]
})
