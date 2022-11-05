import {
  createStyles,
  Paper,
  Text,
  ThemeIcon,
  Badge,
  Flex,
} from "@mantine/core";
import { ReactNode } from "react";

interface CustomCardProps {
  fromColorGrad: string;
  toColorGrad: string;
}

const useStyles = createStyles(
  (theme, { fromColorGrad, toColorGrad }: CustomCardProps) => ({
    card: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      cursor: "pointer",
      overflow: "hidden",

      transition: "transform 150ms ease, box-shadow 100ms ease",
      padding: theme.spacing.lg,

      paddingLeft: theme.spacing.lg * 2,

      "&:hover": {
        boxShadow: theme.shadows.md,
        transform: "scale(1.02)",
      },

      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: 6,
        backgroundImage: theme.fn.linearGradient(0, fromColorGrad, toColorGrad),
      },
    },
  })
);

interface TechBadgeProps {
  text: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  fromColorGrad: string;
  toColorGrad: string;
  icon: ReactNode;
  badges: TechBadgeProps[];
  linkTo: string;
}

export function ProjectCard({
  title,
  description,
  fromColorGrad,
  toColorGrad,
  icon,
  badges,
  linkTo,
}: ProjectCardProps) {
  const { classes } = useStyles({ fromColorGrad, toColorGrad });
  return (
    <Paper
      withBorder
      radius="md"
      className={classes.card}
      component="a"
      href={linkTo}
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify={{ sm: "center" }}
      >
        <ThemeIcon
          size={48}
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: fromColorGrad, to: toColorGrad }}
        >
          {icon}
        </ThemeIcon>

        <Flex direction="column" gap={{ base: "sm", sm: 0 }}>
          <Flex
            wrap="nowrap"
            //gap="sm"
            justify="flex-start"
            align={{ base: "flex-start", sm: "center" }}
            //direction="row"
            direction={{ base: "column", sm: "row" }}
            gap={{ base: "sm", sm: "lg" }}
          >
            <Text size="lg" weight={500} align="left">
              {title}
            </Text>
            <Flex
              wrap={{ base: "wrap", sm: "nowrap" }}
              gap="sm"
              justify="flex-start"
              align="center"
              direction="row"
            >
              {badges.map((badge) => (
                <Badge
                  key={badge.text}
                  color={badge.color}
                  size="sm"
                  variant="light"
                >
                  {badge.text}
                </Badge>
              ))}
            </Flex>
          </Flex>

          <Text size="sm" color="dimmed" align="left" lineClamp={0}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Paper>
  );
}
