import { Application, Router } from "https://deno.land/x/oak@v17.1.3/mod.ts";

import * as revenuecat from "./routes/revenuecat.ts";
import * as users from "./services/users.ts";
import * as settings from "./routes/settings.ts";

const app = new Application();
const router = new Router();

users.initialize(router);
settings.initialize(router);
revenuecat.initialize(router);

// Apply router middleware
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
const port = parseInt(Deno.env.get("PORT") || "8000");

console.log(`Server running on http://localhost:${port}`);

await app.listen({ port });
