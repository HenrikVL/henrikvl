import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HeaderResponsive } from "./components/Header";
import { AppShell, MantineProvider } from "@mantine/core";

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

function App() {
  return (
    <div className="App">
      <MantineProvider
        theme={{ colorScheme: "light" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          fixed={true}
          header={<HeaderResponsive links={links.links} />}
        >
          content
        </AppShell>
      </MantineProvider>
    </div>
  );
}

export default App;
