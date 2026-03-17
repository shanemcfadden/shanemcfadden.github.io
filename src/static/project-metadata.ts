import { Technology } from "@types";

export interface Project {
  name: string;
  description: string;
  featuredTools: Technology[];
  githubRepository: string;
  liveSite: string;
  previewImageHref: string;
  previewImageWebp: string;
  slug: string;
  tools: Technology[];
}

export const PROJECT_METADATA: Project[] = [
  {
    name: "Data Structures Visualizer",
    description:
      "A web application for viewing and manipulating standard data structures. Allows users to develop a deeper understanding of each data structure's key properties and methods using interactive forms, auto-generated SVG graphics, and links to the data structure's underlying source code.",
    featuredTools: [
      Technology.TypeScript,
      Technology.React,
      Technology.NextJS,
      Technology.SVG,
      Technology.Tailwind,
    ],
    githubRepository:
      "https://github.com/shanemcfadden/data-structures-visualizer",
    liveSite: "https://shanemcfadden.dev/data-structures-visualizer",
    previewImageHref: "/images/data-structures-visualizer-preview.png",
    previewImageWebp: "/images/data-structures-visualizer-preview.webp",
    slug: "data-structures-visualizer",
    tools: [
      Technology.TypeScript,
      Technology.React,
      Technology.NextJS,
      Technology.SVG,
      Technology.Tailwind,
      Technology.Cypress,
      Technology.Vitest,
      Technology.FastCheck,
      Technology.GithubActions,
      Technology.GithubPages,
    ],
  },
  {
    name: "Interactive Pathfinder",
    description:
      "A single page application that allows users to draw various terrains on a grid, plot two points, and calculate the easiest path between them.",
    featuredTools: [
      Technology.TypeScript,
      Technology.React,
      Technology.Tailwind,
      Technology.Vite,
      Technology.Vitest,
    ],
    githubRepository: "https://github.com/shanemcfadden/interactive-pathfinder",
    liveSite: "https://shanemcfadden.dev/interactive-pathfinder",
    previewImageHref: "/images/interactive-pathfinder-preview.png",
    previewImageWebp: "/images/interactive-pathfinder-preview.webp",
    slug: "interactive-pathfinder",
    tools: [
      Technology.TypeScript,
      Technology.React,
      Technology.Tailwind,
      Technology.Vite,
      Technology.Cypress,
      Technology.Vitest,
      Technology.GithubActions,
      Technology.GithubPages,
    ],
  },
  {
    name: "mcfaddenpiano.com",
    description:
      "A static website for my freelance work as a classical pianist. Though I haven't worked as a full-time musician since the end of 2020, I continue to accompany and coach other musicians from time to time.",
    featuredTools: [
      Technology.TypeScript,
      Technology.React,
      Technology.Gatsby,
      Technology.Tailwind,
      Technology.Netlify,
    ],
    githubRepository: "https://github.com/shanemcfadden/mcfaddenpiano.com",
    liveSite: "https://www.mcfaddenpiano.com/",
    previewImageHref: "/images/mcfadden-piano-preview.jpg",
    previewImageWebp: "/images/mcfadden-piano-preview.webp",
    slug: "mcfadden-piano",
    tools: [
      Technology.TypeScript,
      Technology.React,
      Technology.Gatsby,
      Technology.Tailwind,
      Technology.GithubActions,
      Technology.Netlify,
    ],
  },
  {
    name: "Snake Like",
    description:
      "A browser-based snake-like game playable on desktop or mobile.",
    featuredTools: [
      Technology.TypeScript,
      Technology.React,
      Technology.Tailwind,
      Technology.Vite,
    ],
    githubRepository: "https://github.com/shanemcfadden/snake-like",
    liveSite: "https://shanemcfadden.dev/snake-like/",
    previewImageHref: "/images/snake-like-preview.png",
    previewImageWebp: "/images/snake-like-preview.webp",
    slug: "snake-like",
    tools: [
      Technology.TypeScript,
      Technology.React,
      Technology.Tailwind,
      Technology.Vite,
      Technology.GithubActions,
      Technology.GithubPages,
    ],
  },
];
