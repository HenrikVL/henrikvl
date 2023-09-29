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
        "https://www.outsideonline.com/wp-content/uploads/2020/09/24/climber-mountain-valley_s.jpg",
        "https://www.patagonia.com/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw2c112f60/hero/etzel_k_1375_cc_WEB.jpg",
      ],
    },
    {
      title: "🚴‍♂️ Biking",
      desctiption:
        "I have been biking since I was a kid and used to compete when I was a teenager. In recent years I have picked up bikepacking. In 2016 me and a friend cycled Göteborg, Stockholm Oslo in 8 days. And in 2020 me and my partner cycled from Molde to Trondheim.",
      images: [
        "https://marketplacer.imgix.net/c5/7pGEwS1vZa6MgAL4857bP-nQo.jpg?auto=format&fm=pjpg&fit=max&q=90&itemprop=image&alt=Beginners%20Guide%20to%20Bikepacking%20Gear&w=1600&h=1000&s=b4b8a60575faf7e360cb817bd71d848a",
        "https://cdn.shopify.com/s/files/1/0519/3501/9198/articles/jenny-tough-2_1024x1024.jpg?v=1650535886",
      ],
    },
    {
      title: "🏕️ Outdoors",
      desctiption:
        "I love beeing outside in nature. From camping to mountain hiking and even some alpine ski touring.",
      images: [
        "https://coresites-cdn-adm.imgix.net/outdoorsmagic/wp-content/uploads/2022/01/Llifestyle-tarp-images.-Picture-credit-Robens-2-1.jpg?fit=crop",
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        "https://www.datocms-assets.com/55942/1633528751-topptur.jpg",
      ],
    },
    {
      title: "🥘 Cooking",
      desctiption:
        "One of my favourite activities is cooking. I love to try new recipes and experiment with different ingredients. Since 2019 I have been mostly eating plant based which has really opened up a whole new world of food for me.",
      images: [
        "https://assets.bonappetit.com/photos/5cd34bded7a272f22bd26e06/1:1/w_2560%2Cc_limit/HLY-Veggie-Enchilada-Horizontal.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-210519-chillimac-04-landscape-jg-1623708475.jpg?crop=0.522xw:0.784xh;0.151xw,0.0962xh&resize=640:*",
        "https://i.pinimg.com/originals/2d/57/c1/2d57c16eeef0ebe7ee141b445e1ea29c.jpg",
      ],
    },
    {
      title: "❄️ Ice climbing",
      desctiption:
        "In the winter of 2022 I finally aquired the gear I needed to start ice climbing. I have been climbing for a few years, but never tried ice climbing before. I'm really looking forward to learning more and getting out this coming season!",
      images: [
        require("../images/ice_climbing_1.JPG"),
        require("../images/ice_climbing_2.jpeg"),
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
