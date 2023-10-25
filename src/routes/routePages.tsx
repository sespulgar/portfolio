import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Experience } from "../pages/Experience";
import { Projects } from "../pages/Projects";
import { CardWithForm } from "../pages/CardWithForm";
import MainLayout from "@/components/MainLayout";

export const RoutePages = () => {
  const ContextProvider = React.Fragment;
  return (
    <ContextProvider>
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/test" element={<CardWithForm />} />
      </Route>

      {/* {Object.keys(routes).map((id) => (
        <Route key={id} path={route(id).path} element={<ProtectedRoutes />}>
          {route(id)
            .children.filter(({ element }) => !!element)
            .map(
              ({ path, element, label }, i) =>
                element && (
                  <Route key={i} path={routepath(id, path)} element={element} />
                )
            )}
        </Route>
      ))} */}
    </Routes>
    </ContextProvider>
  );
};
