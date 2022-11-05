import { Container, Title, Space, SimpleGrid } from "@mantine/core";
import { IconBike, IconBolt, IconFiles } from "@tabler/icons";
import { ProjectCard } from "../components/ProjectCard";
import DefaultStyles from "../Styles";

const Projects = () => {
  const { classes } = DefaultStyles();

  const projectDescriptions = {
    apiir: "Bike fitting application. ",
    wiseline: "A web application for power grid maintenance companies.",
    ntnui: "Admission form application for the student organization NTNUI.",
  };

  return (
    <Container m="auto" size={"sm"} p={"md"}>
      <Title className={classes.title}>Projects</Title>
      <Space h="xl" />
      <SimpleGrid cols={1}>
        <ProjectCard
          title="Wiseline"
          description={projectDescriptions["wiseline"]}
          fromColorGrad="#264873"
          toColorGrad="#F87831"
          icon={<IconBolt size={32} />}
          badges={[
            { text: "React", color: "cyan" },
            { text: "Typescript", color: "yellow" },
            { text: "Django", color: "red" },
          ]}
          linkTo={"https://www.wiseline.no/"}
        />
        <ProjectCard
          title="Apiir"
          description={projectDescriptions["apiir"]}
          fromColorGrad="#E5FF88"
          toColorGrad="#A7A7A7"
          icon={<IconBike size={32} />}
          badges={[
            { text: "Flutter", color: "blue" },
            { text: "Firebase", color: "orange" },
          ]}
          linkTo={"https://www.apiir.tech/"}
        />
        <ProjectCard
          title="NTNUI"
          description={projectDescriptions["ntnui"]}
          fromColorGrad="green"
          toColorGrad="red"
          icon={<IconFiles size={32} />}
          badges={[
            { text: "React", color: "cyan" },
            { text: "Typescript", color: "yellow" },
            { text: "Express.js", color: "gray" },
            { text: "MongoDB", color: "teal" },
          ]}
          linkTo={"https://github.com/NTNUI/opptak"}
        />
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
