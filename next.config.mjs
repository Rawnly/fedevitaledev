import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    swcPlugins: [["next-superjson-plugin", {}]],
  },
};

// module.exports = withContentlayer(config);
export default withContentlayer(config);
