import { Router } from "https://deno.land/x/oak@v17.1.3/mod.ts";
import { RevenueCatEventBody } from "../types/revenuecat.d.ts";
import { ERROR_INVALID_EVENT_TYPE } from "../errors.ts";

export const initialize = (router: Router) => {
  router.post("/apps/:app_id/revenuecat", async (ctx) => {
    const { app_id } = ctx.params;

    const body = (await ctx.request.body) as unknown as RevenueCatEventBody;

    // Parse the RevenueCat webhook data
    const { event } = body;
    let purchasedItems = [];

    if (
      event.type === "INITIAL_PURCHASE" ||
      event.type === "RENEWAL" ||
      event.type === "NON_RENEWING_PURCHASE"
    ) {
      purchasedItems = event.product_id ? [event.product_id] : [];
    } else {
      ctx.response.status = 400;

      ctx.response.body = {
        error: ERROR_INVALID_EVENT_TYPE,
        message: `${event.type} is not a valid event type`,
      };

      return;
    }

    ctx.response.body = {
      message: `Processed RevenueCat data for app ${app_id}`,
      app_id,
      event_type: event.type,
      purchased_items: purchasedItems,
      received_data: body,
    };
  });
};
