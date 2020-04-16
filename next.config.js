module.exports = {
  exportPathMap: (defaultPathMap, { dev }) => {
    return {
      "/about": {
        page: "/about",
      },
      "/es/about": {
        page: "/about",
      },
      "/ru/about": {
        page: "/about",
      },
    };
  },
  experimental: {
    async rewrites() {
      return [{ source: "/:lang(en|es)?/about", destination: "/about" }];
    },
  },
};
