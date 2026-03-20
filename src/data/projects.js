// src/data/projects.js

export const categories = [
  "Hard Surface",
  "Environment",
  "Animation",
  "Tracking",
];

export const projects = [
  {
    slug: "up-house",
    title: "Environment UP HOUSE",
    category: "Environment",

    cover: "/enviroments/CasaUp/RenderUp10MB.webp",

    finalRenders: [
      "/enviroments/CasaUp/RenderUp10MB.webp",
    ],

    wireframe: "/enviroments/CasaUp/RenderUpWireframe10MB.webp",
    clayRender: "/enviroments/CasaUp/RenderUpArcilla10MB.webp",

    description:
      "Render of the house from the movie UP.",

  },

  {
    slug: "room-1",
    title: "3D Room design",
    category: "Diorama",

    cover: "/diorama/Habitacion01/HabitacionRender.webp",

    finalRenders: [
      "/diorama/Habitacion01/RenderTexturaHabitacion.mp4",

    ],
    clayVideo: "/diorama/Habitacion01/AnimClayHabitacion.mp4",
    clayRender: "/diorama/Habitacion01/RenderClayHabitacion.webp",

    description:
      "3D design of a modern room for teenagers.",


  },
  {
    slug: "room-2",
    title: "3D Room design 2",
    category: "Diorama",

    cover: "/diorama/Habitacion02/RenderTexturaHabitacion02.webp",

    finalRenders: [
      "/diorama/Habitacion02/RenderTexturaHabitacion02.mp4",

    ],
    clayVideo: "/diorama/Habitacion02/RenderClayHabitacion02.mp4",
    clayRender: "/diorama/Habitacion02/RenderClayHabitacion02.webp",

    description:
      "3D design of a modern room for teenagers.",


  },
  {
    slug: "temple",
    title: "Ancient Temple",
    category: "Environment",

    cover: "/enviroments/templo/RenderTemplo4K.webp",

    finalRenders: [
      "/enviroments/templo/RenderTemploBanner.webp",
      "/enviroments/templo/RenderTemploAbandonado.mp4",

    ],

    description:
      "Ancient abandonated temple with old arquitecture.",
  },
  {
    slug: "animations",
    title: "Body Movements Animations",
    category: "Animations",

    cover: "/animation/animationCover.webp",

    finalRenders: [
      "/animation/animation1.mov",
      "/animation/animation2.mov",

    ],


    description:
      "Body animated movements as standing up or playing with knifes.",


  },
];