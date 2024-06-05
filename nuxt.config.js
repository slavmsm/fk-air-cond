require("dotenv").config();

export default {
  mode: "universal",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "assets/logo/fk-Aircond-icon.png",
      },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/css/fontello.css" },
      { rel: "stylesheet", href: "/assets/css/owl-carousel.min.css" },
      { rel: "stylesheet", href: "/assets/css/magnific.min.css" },
      { rel: "stylesheet", href: "/assets/css/animate.css" },
      { rel: "stylesheet", href: "/assets/source/jquery.fancybox.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
    ],
    script: [
      { src: "/assets/js/jquery.min.js", type: "text/javascript", body: true },
      {
        src: "/assets/source/jquery.fancybox.pack.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "/assets/js/bootstrap.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "/assets/js/owl.carousel.min.js",
        type: "text/javascript",
        body: true,
      },
      { src: "/assets/js/waypoint.js", type: "text/javascript", body: true },
      {
        src: "/assets/js/custom_googlemap.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_Agsvf36du-7l_mp8iu1a-rXoKcWfs2I",
        type: "text/javascript",
        body: true,
      },
      {
        src: "/assets/js/jquery.counter.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "/assets/js/magnific.min.js",
        type: "text/javascript",
        body: true,
      },
    ],
  },
  loading: { color: "#0eb3d6", height: "4px" },
  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  css: [],
  plugins: [],
  buildModules: [],
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],
  axios: {
    baseURL: "https://graphql.datocms.com/", // Correct base URL for DatoCMS API
  },
  build: { extend(config, ctx) {} },
};
