import { Database, PostgresConnector } from "https://deno.land/x/denodb/mod.ts";
import { UserSettings } from "./models/user_settings.ts";
import { User } from "./models/user.ts";

// Connect to PostgreSQL
const connector = new PostgresConnector({
  database: Deno.env.get("POSTGRES_DB") || "",
  host: Deno.env.get("POSTGRES_HOST") || "",
  username: Deno.env.get("POSTGRES_USER") || "",
  password: Deno.env.get("POSTGRES_PASSWORD") || "",
  port: parseInt(Deno.env.get("POSTGRES_PORT") || "5432"),
});

const db = new Database(connector);
db.link([UserSettings, User]);
await db.sync(); // Ensure the table is created