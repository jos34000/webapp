import { config } from "dotenv"
import { resolve } from "path"

let envFile
switch (process.env.NODE_ENV) {
  case "development":
    envFile = ".env.dev"
    break
  case "test":
    envFile = ".env.test"
    break
  default:
    envFile = ".env.prod"
}

config({ path: resolve("/webapp", envFile) })

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default nextConfig
