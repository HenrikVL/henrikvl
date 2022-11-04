import "./App.css";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import AppShell from "./components/AppShell";
import { useLocalStorage, useHotkeys } from "@mantine/hooks";

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
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme: colorScheme,
            fontFamily: "Poppins",
            headings: { fontFamily: "Poppins" },
            globalStyles: (theme) => ({
              title: {
                width: "fit-content",
                lineHeight: 1.5,
                "&::after": {
                  content: "''",
                  display: "block",
                  background:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : theme.colors.gray[3],

                  height: "2px",
                  borderRadius: "5px",
                },
              },
            }),
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <AppShell></AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
