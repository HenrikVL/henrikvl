import { Container, Title, Space, Flex, SimpleGrid } from "@mantine/core";
import CarouselInterestCard from "../components/InterestCard";
import DefaultStyles from "../Styles";

const Interests = () => {
  const { classes } = DefaultStyles();

  const interests = [
    {
      title: "🧗‍♂️ Climbing",
      desctiption:
        "I started bouldering in 2020, and I have been hooked ever since. I climb mostly indoors, but try to get outside when the weather allows it.",
      images: [
        require("../images/climbing/bouldering.jpeg"),
        require("../images/climbing/climbing_trad_1.JPG"),
        require("../images/climbing/climbing_trad_2.jpeg"),
        require("../images/climbing/groove_tube_thailand.JPG"),
      ],
    },
    {
      title: "🚴‍♂️ Biking",
      desctiption:
        "I have been biking since I was a kid and used to compete when I was a teenager. In recent years I have picked up bikepacking. In 2016 me and a friend cycled Göteborg, Stockholm Oslo in 8 days. And in 2020 me and my partner cycled from Molde to Trondheim.",
      images: [
        require("../images/bikepacking/bikepacking_1.jpeg"),
        require("../images/bikepacking/bikepacking_2.jpeg"),
        require("../images/bikepacking/bikepacking_3.jpeg"),
        require("../images/bikepacking/bikepacking_4.jpeg"),
      ],
    },
    {
      title: "🏕️ Outdoors",
      desctiption:
        "I love beeing outside in nature. From camping to mountain hiking and even some alpine ski touring.",
      images: [
        require("../images/camping/camping_5.jpeg"),
        require("../images/camping/camping_1.jpeg"),
        require("../images/camping/camping_2.jpeg"),
        require("../images/camping/camping_3.jpeg"),
        require("../images/camping/camping_4.jpeg"),
        require("../images/camping/camping_6.jpeg"),
      ],
    },
    {
      title: "🥘 Cooking",
      desctiption:
        "One of my favourite activities is cooking. I love to try new recipes and experiment with different ingredients. Since 2019 I have been mostly eating plant based which has really opened up a whole new world of food for me.",
      images: [
        require("../images/cooking/food_5.jpeg"),
        require("../images/cooking/food_1.jpeg"),
        require("../images/cooking/food_2.jpeg"),
        require("../images/cooking/food_3.jpeg"),
        require("../images/cooking/food_4.jpeg"),
        require("../images/cooking/food_6.jpeg"),
      ],
    },
    {
      title: "❄️ Ice climbing",
      desctiption:
        "In the winter of 2022 I finally aquired the gear I needed to start ice climbing. I have been climbing for a few years, but never tried ice climbing before. I'm really looking forward to learning more and getting out this coming season!",
      images: [
        require("../images/ice_climbing/ice_climbing_1.JPG"),
        require("../images/ice_climbing/ice_climbing_2.jpeg"),
        require("../images/ice_climbing/ice_climbing_3.jpeg"),
      ],
    },
  ];

  return (
    <Container m="auto" size={"sm"} p={"md"}>
      <Title className={classes.title}>Interests</Title>
      <Space h="xl" />
      <SimpleGrid spacing="lg" breakpoints={[{ minWidth: "sm", cols: 2 }]}>
        {
          // for each interest, create a card
          interests.map((interest) => (
            <CarouselInterestCard
              title={interest.title}
              description={interest.desctiption}
              images={interest.images}
            />
          ))
        }
      </SimpleGrid>
    </Container>
  );
};

export default Interests;
