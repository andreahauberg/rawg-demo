import { DataSource } from "typeorm";
import { Game } from "./entities/Game";
import { Genre } from "./entities/Genre";
import { ParentPlatform } from "./entities/ParentPlatform";
import { Store } from "./entities/Store";

// Keep the original configuration shape but enable SSL only when requested.
// Use DB_SSL="true" to force SSL (useful on Render). Locally leave it unset/false.
const dbType = (process.env.DB_TYPE as any) ?? "mysql";
const dbUrl = process.env.DATABASE_URL;

// Explicit if/else for readability: DB_SSL takes precedence. Otherwise enable SSL in production when using Postgres.
let shouldUseSSL = false;
if (typeof process.env.DB_SSL !== "undefined") {
  shouldUseSSL = process.env.DB_SSL === "true";
} else if (process.env.NODE_ENV === "production" && dbType === "postgres") {
  shouldUseSSL = true;
} else {
  shouldUseSSL = false;
}

const options: any = {
  // type: process.env.DB_TYPE as "mysql" | "postgres", //for local testing
  type: dbType,
  url: dbUrl,
  entities: [Game, Genre, ParentPlatform, Store],
  synchronize: true,
  logging: true,
};

if (shouldUseSSL) {
  // Keep the same SSL shape you had originally so behaviour is unchanged in prod
  options.ssl = true;
  options.extra = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

export const AppDataSource = new DataSource(options);
