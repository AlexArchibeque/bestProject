import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

if (!__prod__) {
  require("dotenv").config();
}

let postgresUsername = process.env.PG_USERNAME;
let postgresPassword = process.env.PG_PASSWORD;

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },

  entities: [Post, User],
  dbName: "bestProject",
  type: "postgresql",
  debug: !__prod__,
  user: postgresUsername,
  password: postgresPassword,
} as Parameters<typeof MikroORM.init>[0];
