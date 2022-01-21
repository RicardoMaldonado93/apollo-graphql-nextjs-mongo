const curses = [
  {
    title: "JavaScript Moderno Guía Definitiva Construye +10 Proyectos",
    tech: "JavaScript ES6",
  },
  {
    title: "React – La Guía Completa: Hooks Context Redux MERN +15 Apps",
    tech: "React",
  },
  {
    title: "Node.js – Bootcamp Desarrollo Web inc. MVC y REST API's",
    tech: "Node.js",
  },
  {
    title: "ReactJS Avanzado – FullStack React GraphQL y Apollo",
    tech: "React",
  },
];

const curseResolvers = {
  Query: {
    getCurses: () => curses,
    getTechs: () => curses,
    getCurse: (_,{input:{tech}}) => ( curses.filter( curse => curse.tech === tech ) )
  },
};

module.exports = curseResolvers;
