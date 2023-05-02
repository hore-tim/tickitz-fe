/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_FE_URL: process.env.NEXT_PUBLIC_FE_URL,
  },
  images : {
    domains: ["res.cloudinary.com"]
  }
}

module.exports = nextConfig
