import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export const NavBar = () => {
  return (
    <>
      <div className="flex flex-row">
        <h1> Logo Here</h1>
        <ModeToggle />
      </div>
      <div className="tw-flex tw-items-center tw-gap-x-3">
        
      </div>
    </>
  );
};
