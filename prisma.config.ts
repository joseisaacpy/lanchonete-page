import { defineConfig, env } from "prisma/config";

// importa o dotenv
import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
