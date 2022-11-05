import { Title, Text, Container, Space } from "@mantine/core";
import DefaultStyles from "../Styles";

const Introduction = () => {
  const { classes } = DefaultStyles();
  return (
    <Container m="auto" size={"sm"} p={"md"}>
      <Title className={classes.title} align="left">
        Hi, I'm Henrik 👋
      </Title>
      <Space h="lg" />
      <Text size={"xl"} align="left">
        Have a look around and see if you find something interesting!
      </Text>
    </Container>
  );
};

export default Introduction;
