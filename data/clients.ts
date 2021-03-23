type Project = {
  text: string;
  url: string;
  technologies: string;
};

type Client = {
  name: string;
  projects: Project[];
};

const clients: Client[] = [
  {
    name: "RMIT University",
    projects: [
      {
        text: "Open Day 2020",
        url: "https://primemotive.com/work/rmit-open-day",
        technologies: "React, TypeScript, Meteor, Prismic, Cypress",
      },
      {
        text: "Pathways",
        url: "https://pathways.rmit.edu.au/",
        technologies: "React, Apollo, GraphQL, Prisma, Node.js",
      },
    ],
  },
  {
    name: "IAG Group",
    projects: [
      {
        text: "Motorserve",
        url: "https://motorserve.com.au/",
        technologies: "React, Gatsby, GraphQL, Sanity.io",
      },
      {
        text: "CGU.com.au",
        url: "https://www.cgu.com.au/",
        technologies: "HTML, JS, Sass, Gulp, Adobe Target, GTM",
      },
    ],
  },
  {
    name: "Prime Motive",
    projects: [
      {
        text: "Website rebrand",
        url: "https://primemotive.com/",
        technologies: "React, MobX, Framer Motion",
      },
    ],
  },
];

export default clients;
