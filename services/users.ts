import { Router } from "https://deno.land/x/oak@v17.1.3/mod.ts";

export const initialize = (router: Router) => {
  router.post("/apps/:app_id/users/:user_id", async (ctx) => {
    const { app_id, user_id } = ctx.params;

    ctx.response.body = {
      message: `Retrieved user ${user_id} for app ${app_id}`,
      app_id,
      user_id,
    };
  });

  // GET /apps/:app_id/users/:user_id
  router.get("/apps/:app_id/users/:user_id", (ctx) => {
    const { app_id, user_id } = ctx.params;

    ctx.response.body = {
      message: `Retrieved user ${user_id} for app ${app_id}`,
      app_id,
      user_id,
    };
  });
};
