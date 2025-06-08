import type { NextConfig } from "next";

import { commitHash, buildDate } from "./src/lib/build-info";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "development" ? undefined : "export",
  // distDir: "dist",

  webpack(config) {
    config.module.rules.push({
      test: /\.js$/,
      resourceQuery: /raw/,
      use: "raw-loader",
    });
    /**
     * SVG SUPPORT
     */
    // Grab the existing rule that handles SVG imports
    // @ts-expect-error works
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.(".svg"));
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: /react/, // *.svg?react
        use: ["@svgr/webpack"],
      },
      // Convert all other *.svg imports to React components
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /react/] }, // exclude if *.svg?react
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    /**
     * END SVG SUPPORT
     */

    return config;
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
  env: {
    NEXT_PUBLIC_GIT_COMMIT_HASH: commitHash,
    NEXT_PUBLIC_BUILD_DATE: buildDate,
  },
};

export default nextConfig;
