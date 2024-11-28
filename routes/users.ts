import { Router } from "https://deno.land/x/oak@v17.1.3/mod.ts";

export const initialize = (router: Router) => {
  router.get("/apps/:app_id/users/:user_id", async (ctx) => {});
  router.post("/apps/:app_id/users/:user_id", async (ctx) => {});
};
