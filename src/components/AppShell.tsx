import React from "react";
import logo from "./logo.svg";
import { AppShell as MantineAppShell } from "@mantine/core";
import { HeaderResponsive } from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Router from "../routes/Router";

const links = {
  links: [
    {
      link: "/about",
      label: "🙋‍♂️ About me",
    },
    {
      link: "/projects",
      label: "📈 Projects",
    },
    {
      link: "/interests",
      label: "🧗‍♂️ Interests",
    },
    {
      link: "/blog",
      label: "✍️ Blog",
    },
  ],
};

const AppShell = () => {
  return (
    <BrowserRouter>
      <MantineAppShell header={<HeaderResponsive links={links.links} />}>
        <Router />
      </MantineAppShell>
    </BrowserRouter>
  );
};

export default AppShell;
