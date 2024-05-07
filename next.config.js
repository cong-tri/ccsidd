/**
 * @format
 * @type {import('next').NextConfig}
 */

const path = require("path");
const nextConfig = {
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
    MAP_KEY: process.env.APIS_MAP_KEY,
    SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    MAIL_HOST: process.env.SERVER_MAIL_HOST,
    MAIL_PORT: process.env.SERVER_MAIL_PORT,
    SENDER: process.env.SENDER_MAIL,
    AUTH_USER: process.env.SENDER_AUTH_USER,
    AUTH_PASS: process.env.SENDER_AUTH_PASS,
  },
};

module.exports = nextConfig;
