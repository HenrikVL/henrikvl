import React from "react";
import "./App.css";
import { HeaderResponsive } from "./components/Header";
import { MantineProvider } from "@mantine/core";
import AppShell from "./components/AppShell";

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
        <AppShell></AppShell>
      </MantineProvider>
    </div>
  );
}

export default App;
