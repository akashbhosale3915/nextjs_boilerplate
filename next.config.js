const { secret } = require("./env");

/** @type {import('next').NextConfig} */

const nextConfig = {
  env: secret || {},
};

module.exports = nextConfig;
