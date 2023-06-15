import type { Knex } from "knex";

// Update with your config settings.

const config: Knex.Config = {
  client: "pg",
  connection:
    "postgres://postgres:GbVnsxHs8uHuaaxT@db.lpurlajmumofvmzxygct.supabase.co:6543/postgres",
  migrations: {
    directory: "src/database",
  },
  useNullAsDefault: true,
};

export default config;
