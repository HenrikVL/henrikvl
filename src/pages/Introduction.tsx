import { Title, Text, Container, createStyles, Space } from "@mantine/core";

const useStyles = createStyles((theme) => ({
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
}));

const Introduction = () => {
  const { classes } = useStyles();
  return (
    <Container m="auto" size={"sm"} p={"md"}>
      <Title className={classes.title} align="left">
        Hi, I'm Henrik 👋
      </Title>
      <Space h="lg" />
      <Text size={"xl"} align="left">
        I'm a developer, climber and tech enthusiast from Norway. Currently I am
        studying Informatics at NTNU and working on a project with{" "}
        <Text variant="link" component="a" href="https://www.wiseline.no/">
          Wiseline
        </Text>{" "}
        developing a web application for power grid maintenance companies.
      </Text>
      <Space h="sm" />
      <Text size={"xl"} align="left">
        I also work in{" "}
        <Text variant="link" component="a" href="https://www.wiseline.no/">
          Orakel Support Services
        </Text>{" "}
        at NTNU, providing IT support to students and employees of the
        university.
      </Text>
      <Space h="sm" />
      <Text size={"xl"} align="left">
        Aside from work I spend most of my time climbing, watching TV shows and
        hanging out with friends.
      </Text>
    </Container>
  );
};

export default Introduction;
