import { Title, Text, Container, Space } from "@mantine/core";
import DefaultStyles from "../Styles";

const About = () => {
  const { classes } = DefaultStyles();
  return (
    <Container m="auto" size={"sm"} p={"md"}>
      <Title className={classes.title}>About</Title>
      <Space h="lg" />
      <Text className={classes.text}>
        I'm a developer, climber and tech enthusiast from Norway. Currently I am
        studying Informatics at NTNU and working on a project with{" "}
        <Text variant="link" component="a" href="https://www.wiseline.no/">
          Wiseline
        </Text>{" "}
        developing a web application for power grid maintenance companies.
      </Text>
      <Space h="sm" />
      <Text className={classes.text}>
        I also work in{" "}
        <Text variant="link" component="a" href="https://www.wiseline.no/">
          Orakel Support Services
        </Text>{" "}
        at NTNU, providing IT support to students and employees of the
        university.
      </Text>
      <Space h="sm" />
      <Text className={classes.text}>
        Aside from work I spend most of my time climbing, watching TV shows and
        hanging out with friends.
      </Text>
    </Container>
  );
};

export default About;
