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
  env: {
    MAP_KEY: "AIzaSyCrqcQjQzZriX_nVK2ZA-EXKp67inaIvHU",
    RECAPTCHA_SITE_KEY: "6LdXacYpAAAAAIlZrhLIuktKCwq-s2IVQVuM9-qJ",
  },
};
