import { DataSource } from "typeorm";
import { Game } from "./entities/Game";
import { Genre } from "./entities/Genre";
import { ParentPlatform } from "./entities/ParentPlatform";
import { Store } from "./entities/Store";

// Keep the original configuration shape but enable SSL only when requested.
// Use DB_SSL="true" to force SSL (useful on Render). Locally leave it unset/false.
const dbType = (process.env.DB_TYPE as any) ?? "mysql";
const dbUrl = process.env.DATABASE_URL;

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
  entities: [Game, Genre, ParentPlatform, Store], // Registering entities with the data source
  synchronize: true, // Automatically create or modify database schema on every application launch
  logging: true, // Enable query logging for debugging purposes
};

if (shouldUseSSL) {
  options.ssl = true;
  options.extra = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

export const AppDataSource = new DataSource(options);
