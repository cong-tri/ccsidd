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
    MAP_KEY: "AIzaSyCrqcQjQzZriX_nVK2ZA-EXKp67inaIvHU",
    RECAPTCHA_SITE_KEY: "6LdXacYpAAAAAIlZrhLIuktKCwq-s2IVQVuM9-qJ",
    MAIL_HOST: "mail.ccsidd.com",
    MAIL_PORT: "465",
    SENDER_MAIL: "tri.daocong@ccsidd.com",
    SENDER_AUTH_USER: "tri.daocong@ccsidd.com",
    SENDER_AUTH_PASS: "Daocongtri@1609",
    // RECAPTCHA_URL: "https://www.google.com/recaptcha/api/siteverify",
    // GOOGLE_MAP_API_KEY: "AIzaSyBCLo3VQn1OM3j9dm8CIxzNQWcYNdQ5qIc",
  },
};

module.exports = nextConfig;
