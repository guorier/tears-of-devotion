const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  // output: "export",
  // basePath: "/tailwind-project",
  // assetPrefix: "/tailwind-project/",
  images: { unoptimized: true },
  productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src/resources/scss"),
      path.join(__dirname, "src/resources/css"),
    ],
  },
};

