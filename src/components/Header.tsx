import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Avatar,
  MANTINE_SIZES,
  keyframes,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { ColorSchemeToggle } from "./ColorSchemeToggle";

const HEADER_HEIGHT = 80;

/* export const pulse = keyframes({
  "0%": {
    transform: "scale(0.95)",
    boxShadow: "0 0 0 0 rgba(52, 172, 224, 0)",
  },
  "70%": {
    transform: "scale(1)",
    boxShadow: "0 0 0 10px rgba(52, 172, 224, 0)",
  },
  "100%": {
    transform: "scale(0.95)",
    boxShadow: "0 0 0 0 rgba(52, 172, 224, 0)",
  },
}); */

const useStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    // set max width equal to container width
    maxWidth: "720px",
  },

  headerText: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[8],
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
  /*   avatar: {
    // add keyframes
    animation: `${pulse} 2s infinite`,
  }, */
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState("/");
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.link}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} p={"md"} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Group>
          <Link
            to="/"
            onClick={(event) => {
              setActive("/");
              close();
            }}
          >
            <Avatar
              //className={classes.avatar}
              radius="xl"
              size="lg"
              // add path to henrik_profile_close.jpeg
              src={require("../images/henrik_profile_close.jpeg")}
              alt="it's me"
            />
          </Link>

          {/*           <Title order={3} className={classes.headerText}>
            Henrik Viken Lied
          </Title> */}
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group>
          <ColorSchemeToggle />
        </Group>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
