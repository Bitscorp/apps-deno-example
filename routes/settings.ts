import { Router } from "https://deno.land/x/oak@v17.1.3/mod.ts";
import { UserSettings } from "../models/user_settings.ts";

export const initialize = (router: Router) => {
  router.get("/apps/:app_id/users/:user_id/settings", async (ctx) => {
    const { app_id, user_id } = ctx.params;

    const settings = await UserSettings.where({
      appId: app_id,
      userId: user_id,
    }).first();

    ctx.response.body = {
      message: `Retrieved settings for user ${user_id} for app ${app_id}`,
      app_id,
      user_id,
      settings: settings ? settings.settings : null,
    };
  });

  router.post("/apps/:app_id/users/:user_id/settings", async (ctx) => {
    const { app_id, user_id } = ctx.params;
    const { value } = await ctx.request.body;

    // Save settings to the database
    await UserSettings.where({ appId: app_id, userId: user_id }).delete();
    await UserSettings.create({
      appId: app_id,
      userId: user_id,
      settings: value,
    });

    ctx.response.body = {
      message: `Updated settings for user ${user_id} for app ${app_id}`,
      app_id,
      user_id,
    };
  });
};
