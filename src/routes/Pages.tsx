import { ErrorPage } from "@/pages/ErrorPage";
import { Route, Routes } from "react-router";
import { RoutePages } from "./routePages";
import { routes } from "./routes";

export const Pages = () => {
  const routepath = (path?: string) =>
  routes ? `${routes.path}${path}` : "";

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<RoutePages />} />
      {Object.keys(routes).map((id) => (
        <Route key={id} path={routes.path} element={<RoutePages />}>
          {routes.children
            .filter(({ element }) => !!element)
            .map(
              ({ path, element, label }, i) =>
                element && (
                  <Route key={i} path={routepath(path)} element={element} />
                )
            )}
        </Route>
      ))}
    </Routes>
  );
};
