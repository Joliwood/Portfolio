import React from "react";

import { NodeLogo, SassLogo } from "#svg";
import { type CompetenceType } from "#types";

export const languages: CompetenceType[] = [
  {
    name: "TypeScript",
    img: "/images/competence/typescriptLogo.png",
  },
  {
    name: "Rust",
    img: "/images/competence/rustLogo.png",
    isFavoriteStack: true,
  },
  {
    name: "SQL",
    img: "/images/competence/sqlLogo.png",
  },
];

export const frontCompetences: CompetenceType[] = [
  {
    name: "Bevy",
    img: "/images/competence/bevyLogo.png",
    isFavoriteStack: true,
  },
  {
    name: "React.js",
    img: "/images/competence/reactLogo.png",
  },
  {
    name: "Next.js",
    img: "/images/competence/nextLogo.png",
  },
  {
    name: "Sass",
    svg: <SassLogo />,
    isFavoriteStack: true,
  },
  {
    name: "Tailwindcss",
    img: "/images/competence/tailwindcssLogo.png",
  },
  {
    name: "Storybook",
    img: "/images/competence/storybookLogo.png",
  },
];

export const backCompetences: CompetenceType[] = [
  {
    name: "Node.js",
    svg: <NodeLogo />,
  },
  {
    name: "Postgres",
    img: "/images/competence/psqlLogo.png",
    isFavoriteStack: true,
  },
  {
    name: "MongoDB",
    img: "/images/competence/mongodbLogo.png",
  },
  {
    name: "Redis",
    img: "/images/competence/redisLogo.png",
  },
  {
    name: "GraphQL",
    img: "/images/competence/graphqlLogo.png",
    isFavoriteStack: true,
  },
  {
    name: "Knex",
    img: "/images/competence/knexLogo.png",
    isFavoriteStack: true,
  },
  {
    name: "Websockets",
    img: "/images/competence/socketIoLogo.png",
  },
  {
    name: "RabbitMQ",
    img: "/images/competence/rabbitmqLogo.png",
  },
];

export const toolsCompetences: CompetenceType[] = [
  {
    name: "Figma",
    img: "/images/competence/figmaLogo.png",
  },
  {
    name: "Dbeaver",
    img: "/images/competence/dbeaverLogo.png",
    isFavoriteStack: true,
  },
  {
    name: "Postman",
    img: "/images/competence/postmanLogo.png",
  },
  {
    name: "Compass",
    img: "/images/competence/compassLogo.png",
  },
];
