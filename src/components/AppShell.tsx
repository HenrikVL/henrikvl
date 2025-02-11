import { AppShell as MantineAppShell } from "@mantine/core";
import { HeaderResponsive } from "./Header";
import { Footer } from "./Footer";
import { BrowserRouter, useLocation } from "react-router-dom";
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
  const location = useLocation();

  // Define the routes where you want to hide the header and footer
  const noHeaderFooterRoutes = ["/phishing"];

  // Check if the current path matches any of the routes in the array
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <MantineAppShell
      header={hideHeaderFooter ? undefined : <HeaderResponsive links={links.links} />}
      footer={hideHeaderFooter ? undefined : <Footer />}
    >
      <Router />
    </MantineAppShell>
  );
};

// Wrap the AppShell in BrowserRouter in the main App component
const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
