import { config } from "dotenv"
import { resolve } from "path"

let envFile
switch (process.env.NODE_ENV) {
  case "dev":
    envFile = ".env.dev"
    break
  case "home":
    envFile = ".env.home"
    break
  default:
    envFile = ".env.prod"
}

config({ path: resolve("/webapp", envFile) })

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default nextConfig
