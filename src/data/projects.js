// src/data/projects.js

export const categories = [
  "Hard Surface",
  "Environment",
  "Animation",
  "Tracking",
];

export const projects = [
  {
    slug: "futuristic-rifle",
    title: "Futuristic Rifle",
    category: "Hard Surface",

    cover: "/projects/futuristic-rifle/cover.jpg",

    finalRenders: [
      "/projects/futuristic-rifle/final-1.jpg",
      "/projects/futuristic-rifle/final-2.jpg",
    ],

    wireframe: "/projects/futuristic-rifle/wireframe.jpg",
    clayRender: "/projects/futuristic-rifle/clay.jpg",

    description:
      "Hard surface project focused on modeling precision, materials and final presentation.",

    hasViewer: true,
    modelPath: "/projects/futuristic-rifle/model.gltf",
  },

  {
    slug: "abandoned-station",
    title: "Abandoned Station",
    category: "Environment",

    cover: "/projects/abandoned-station/cover.jpg",

    finalRenders: [
      "/projects/abandoned-station/final-1.jpg",
    ],

    wireframe: "/projects/abandoned-station/wireframe.jpg",
    clayRender: "/projects/abandoned-station/clay.jpg",

    description:
      "Environment project focused on lighting, atmosphere and composition.",

    hasViewer: false,
    modelPath: null,
  },
];