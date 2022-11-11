import { AppShell as MantineAppShell } from "@mantine/core";
import { HeaderResponsive } from "./Header";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
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
      link: "/timeline",
      label: "⏳ Timeline",
    },
    {
      link: "/interests",
      label: "🧗‍♂️ Interests",
    },
  ],
};

const AppShell = () => {
  return (
    <BrowserRouter>
      <MantineAppShell
        header={<HeaderResponsive links={links.links} />}
        footer={<Footer />}
      >
        <Router />
      </MantineAppShell>
    </BrowserRouter>
  );
};

export default AppShell;
