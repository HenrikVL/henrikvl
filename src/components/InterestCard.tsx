import { createStyles, Image, Card, Text, Group, Button } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import DefaultStyles from "../Styles";

const useStyles = createStyles((theme, _params, getRef) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: 4,
    height: 4,
    transition: "width 250ms ease",

    "&[data-active]": {
      width: 16,
    },
  },
}));

interface CarouselCardProps {
  title: string;
  description: string;
  images: string[];
}

export function CarouselInterestCard({
  title,
  description,
  images,
}: CarouselCardProps) {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder p="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group position="left" mt="lg">
        <Text weight={500} size="lg">
          {title}
        </Text>
      </Group>

      <Text lineClamp={8} align="left" size="sm" color="dimmed" mt="sm">
        {description}
      </Text>

      {/* <Group position="left" mt="lg">
        <Button radius="md">Read more</Button>
      </Group> */}
    </Card>
  );
}

export default CarouselInterestCard;
