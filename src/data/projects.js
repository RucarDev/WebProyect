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
    title: "Enviroment UP HOUSE",
    category: "Enviroment",

    cover: "/enviroments/CasaUp/RenderUp10MB.png",

    finalRenders: [
      "/enviroments/CasaUp/RenderUp10MB.png",
    ],

    wireframe: "/enviroments/CasaUp/RenderUpWireframe10MB.png",
    clayRender: "/enviroments/CasaUp/RenderUpArcilla10MB.png",

    description:
      "Render of the house from the movie UP.",

  },

  {
    slug: "room-1",
    title: "3D Room desing",
    category: "Diorama",

    cover: "/diorama/Habitacion01/HabitacionRender.png",

    finalRenders: [
      "/diorama/Habitacion01/RenderTexturaHabitacion.mp4",

    ],
    clayVideo: "/diorama/Habitacion01/AnimClayHabitacion.mp4",
    clayRender: "/diorama/Habitacion01/RenderClayHabitacion.png",

    description:
      "3D desing of a modern room for teenagers.",


  },
  {
    slug: "room-2",
    title: "3D Room desing 2",
    category: "Diorama",

    cover: "/diorama/Habitacion02/RenderTexturaHabitacion02.png",

    finalRenders: [
      "/diorama/Habitacion02/RenderTexturaHabitacion02.mp4",

    ],
    clayVideo: "/diorama/Habitacion02/RenderClayHabitacion02.mp4",
    clayRender: "/diorama/Habitacion02/RenderClayHabitacion02.png",

    description:
      "3D desing of a modern room for teenagers.",


  },
  {
    slug: "temple",
    title: "Ancient Temple",
    category: "Enviroment",

    cover: "/enviroments/templo/RenderTemplo4K.png",

    finalRenders: [
      "/enviroments/templo/RenderTemploBanner.png",
      "/enviroments/templo/RenderTemploAbandonado.mp4",

    ],

    description:
      "Ancient abandonated temple with old arquitecture.",
  },
  {
    slug: "animations",
    title: "Body Movements Animations",
    category: "Animations",

    cover: "/animation/animationCover.png",

    finalRenders: [
      "/animation/animation1.mov",
      "/animation/animation2.mov",

    ],


    description:
      "Body animated movements as standing up or playing with knifes.",


  },
];