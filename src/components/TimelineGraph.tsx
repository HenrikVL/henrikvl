import { Text, Timeline } from "@mantine/core";
import {
  IconAbc,
  IconBike,
  IconBolt,
  IconDevicesPc,
  IconPlaneDeparture,
  IconSchool,
} from "@tabler/icons";

const TimelineGraph = () => {
  return (
    <div style={{ maxWidth: 500 }}>
      <Timeline>
        {/* If you do not pass bullet prop, default bullet will be rendered */}
        <Timeline.Item lineVariant="dashed" bulletSize={24} active={false}>
          <Text color="dimmed" size="sm">
            Start
          </Text>
        </Timeline.Item>

        <Timeline.Item
          active
          lineActive
          title="Molde Videregående"
          bulletSize={24}
          bullet={<IconAbc size={14} />}
        >
          <Text color="dimmed" size="sm">
            Finished studying at Molde Videregående Skole
          </Text>
          <Text size="xs" mt={4}>
            Spring 2019
          </Text>
        </Timeline.Item>

        <Timeline.Item
          active
          lineActive
          title="NTNU - Bachelor start"
          bulletSize={24}
          bullet={<IconSchool size={14} />}
        >
          <Text color="dimmed" size="sm">
            Started Bachelor in Informatics at NTNU
          </Text>
          <Text size="xs" mt={4}>
            Fall 2019
          </Text>
        </Timeline.Item>

        <Timeline.Item
          active
          lineActive
          title="Orakeltjenesten"
          bulletSize={24}
          bullet={<IconDevicesPc size={14} />}
        >
          <Text color="dimmed" size="sm">
            Began working in Orakeltjenesten at NTNU
          </Text>
          <Text size="xs" mt={4}>
            Spring 2020
          </Text>
        </Timeline.Item>

        <Timeline.Item
          active
          lineActive
          title="NTNU - Bachelor end"
          bulletSize={24}
          bullet={<IconSchool size={14} />}
        >
          <Text color="dimmed" size="sm">
            Finished Bachelor in Informatics at NTNU
          </Text>
          <Text size="xs" mt={4}>
            Spring 2022
          </Text>
        </Timeline.Item>

        <Timeline.Item
          active
          lineActive
          title="Apiir"
          bulletSize={24}
          bullet={<IconBike size={14} />}
        >
          <Text color="dimmed" size="sm">
            Summer intern at Apiir
          </Text>
          <Text size="xs" mt={4}>
            Summer 2022
          </Text>
        </Timeline.Item>

        <Timeline.Item
          active
          lineActive
          title="Wiseline"
          bulletSize={24}
          bullet={<IconBolt size={14} />}
        >
          <Text color="dimmed" size="sm">
            Began working in Wiseline
          </Text>
          <Text size="xs" mt={4}>
            Fall 2022
          </Text>
        </Timeline.Item>

        <Timeline.Item
          active
          lineActive
          title="Travel"
          bulletSize={24}
          bullet={<IconPlaneDeparture size={14} />}
        >
          <Text color="dimmed" size="sm">
            Backpacking through Southeast Asia and Australia
          </Text>
          <Text size="xs" mt={4}>
            Spring 2023 (4. March - 31. May)
          </Text>
        </Timeline.Item>

        <Timeline.Item
          active
          lineVariant="dashed"
          title="NTNU - Master start"
          bulletSize={24}
          bullet={<IconSchool size={14} />}
        >
          <Text color="dimmed" size="sm">
            Started Master in infromatics - Interaction design, gaming and
            learning technology
          </Text>
          <Text size="xs" mt={4}>
            Fall 2023
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="NTNU - Master end"
          bulletSize={24}
          bullet={<IconSchool size={14} />}
        >
          <Text color="dimmed" size="sm">
            Planned end of Master in infromatics - Interaction design, gaming
            and learning technology
          </Text>
          <Text size="xs" mt={4}>
            Spring 2025
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default TimelineGraph;
