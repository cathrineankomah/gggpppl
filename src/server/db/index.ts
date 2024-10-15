import { createClient, type Client } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { env } from "@/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  client: Client | undefined;
};

const environmentSelector = () => {
  if (env.NODE_ENV === "development") {
    return { url: env.DATABASE_URL };
  }
  return { url: env.DATABASE_URL, authToken: env.TURSO_AUTH_TOKEN };
};

export const client = globalForDb.client ?? createClient(environmentSelector());
if (env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
