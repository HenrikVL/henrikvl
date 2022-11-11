import { Container, Title, Space, SimpleGrid } from "@mantine/core";
import { IconBike, IconBolt, IconFiles } from "@tabler/icons";
import TimelineGraph from "../components/TimelineGraph";
import DefaultStyles from "../Styles";

const Timeline = () => {
  const { classes } = DefaultStyles();

  return (
    <Container m="auto" size={"sm"} p={"md"}>
      <Title className={classes.title}>Timeline</Title>
      <Space h="xl" />
      <TimelineGraph />
    </Container>
  );
};

export default Timeline;
