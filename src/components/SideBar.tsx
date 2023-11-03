import { routes } from "@/routes/routes";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Monitor } from "lucide-react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const SideBar = () => {
    const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-y-3">
        {routes &&
          routes.children.map(({ path, label, ...props }) => (
            <Link to={path} key={path}> {label} </Link>
          ))}
      </div>
    </div>
  );
};
