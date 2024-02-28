/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.lorem.space",
        port: "",
        pathname: "**/**",
      },
    ],
  },
}

export default nextConfig
