import "dotenv/config";

import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./drizzle";

const migrationsClient = postgres(process.env.DATABASE_URL!, {
  max: 1,
});

// @ts-ignore - FIXME
migrate(db, {
  migrationsFolder: "./drizzle",
}).then((result) => {
  console.log("Migrations applied successfully");
  process.exit(0);
}).catch((err) => {
  migrationsClient.end();
  console.error(err);
});
