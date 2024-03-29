import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
} from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    maxWidth: "720px",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text>Made with ❤️ by Henrik</Text>
        <Group className={classes.links} position="right" noWrap>
          <ActionIcon
            variant="light"
            size="lg"
            component="a"
            href="https://www.linkedin.com/in/henrikvl"
          >
            <IconBrandLinkedin size={24} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            variant="light"
            size="lg"
            component="a"
            href="https://github.com/HenrikVL"
          >
            <IconBrandGithub size={24} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
