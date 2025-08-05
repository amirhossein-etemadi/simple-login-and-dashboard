import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    additionalData: `
      @use "abstracts/variables" as *;
      @use "utilities/utilities" as *;
     `,
  },
};

export default nextConfig;
