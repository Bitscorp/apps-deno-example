import { UserSettings } from "../models/user_settings.ts";

export const settingsUpsert = async (
  appId: string,
  userId: string,
  settings: any,
) => {
  await UserSettings.where({ appId: appId, userId: userId }).delete();
  await UserSettings.create({
    appId: appId,
    userId: userId,
    settings: settings,
  });
};
