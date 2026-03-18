// src/data/projects.js

export const categories = [
  "Hard Surface",
  "Environment",
  "Animation",
  "Tracking",
];

export const projects = [
  {
    slug: "up-hous",
    title: "Enviroment UP HOUSE",
    category: "Enviroment",

    cover: "/enviroments/RenderUp10MB.png",

    finalRenders: [
     "/enviroments/RenderUpWireframe10MB.png",
     "/enviroments/RenderUpWireframe10MB.png",
       
    ],

    wireframe: "/enviroments/RenderUpWireframe10MB.png",
    clayRender:  "/enviroments/RenderUpArcilla10MB.png",

    description:
      "Hard surface project focused on modeling precision, materials and final presentation.",

    hasViewer: true,
    modelPath: "/public/models/lion_head_1k.gltf",
  },

  {
     slug: "up-hous",
    title: "Enviroment UP HOUSE",
    category: "Enviroment",

    cover: "/enviroments/RenderUp10MB.png",

    finalRenders: [
      "/enviroments/RenderUpArcilla10MB.png",
       "/enviroments/RenderUpWireframe10MB.png",
    ],

    wireframe: "/projects/futuristic-rifle/wireframe.jpg",
    clayRender: "/projects/futuristic-rifle/clay.jpg",

    description:
      "Hard surface project focused on modeling precision, materials and final presentation.",

    hasViewer: true,
    modelPath: "/public/models/lion_head_1k.gltf",
  },
];