import { createStyles } from "@mantine/core";

const DefaultStyles = createStyles((theme) => ({
  title: {
    textAlign: "left",
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
  text: {
    fontSize: theme.fontSizes.xl,
    textAlign: "left",
  },
}));

export default DefaultStyles;
