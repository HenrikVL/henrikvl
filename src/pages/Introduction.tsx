import {
  Title,
  Text,
  Container,
  Space,
  ActionIcon,
  Group,
} from "@mantine/core";
import DefaultStyles from "../Styles";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons";

const Introduction = () => {
  const { classes } = DefaultStyles();
  return (
    <Container m="auto" size={"sm"} p={"md"}>
      <Title className={classes.title} align="left">
        Hi, I'm Henrik 👋
      </Title>
      <Space h="lg" />
      <Text size={"xl"} align="left">
        Have a look around!
      </Text>
      <Space h="sm" />
      <Text className={classes.text}>
        I made this page to showcase myself and some of my projects. You can
        learn more about me by checking out the menu 👨‍🍳
      </Text>
      <Space h="lg" />
      <Text size={"xl"} className={classes.title}>
        Also, here are some links you might find interesting:
      </Text>
      <Space h="lg" />
      <Group position="left" noWrap>
        <ActionIcon
          color="blue"
          variant="outline"
          size="xl"
          component="a"
          href="https://www.linkedin.com/in/henrikvl"
          about="LinkedIn"
        >
          <IconBrandLinkedin size={24} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          color="green"
          variant="outline"
          size="xl"
          component="a"
          href="https://github.com/HenrikVL"
          about="LinkedIn"
        >
          <IconBrandGithub size={24} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Container>
  );
};

export default Introduction;
