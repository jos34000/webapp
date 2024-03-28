import { config } from "dotenv"
import { resolve } from "path"

let envFile
switch (process.env.NODE_ENV) {
  case "development":
    envFile = ".env.development"
    break
  case "test":
    envFile = ".env.test"
    break
  default:
    envFile = ".env.production"
}

config({ path: resolve("/webapp", envFile) })

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL}:path*`,
      },
    ]
  },
}

export default nextConfig
