/**
 * @format
 * @type {import('next').NextConfig}
 */

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http://localhost:3000",
        port: "3000",
        pathname: "/public/**",
      },
    ],
  },
};
