import { Model, DataTypes } from "https://deno.land/x/denodb/mod.ts";

// Define the Settings model
export class UserSettings extends Model {
  static override table = "user_settings";
  static override timestamps = true;

  static override fields = {
    id: { primaryKey: true, type: DataTypes.UUID, default: DataTypes.UUIDV4 },

    app_id: {
      type: DataTypes.STRING,
      foreignKey: {
        table: "apps",
        field: "id",
      },
    },

    user_id: {
      type: DataTypes.UUIDV4,
      foreignKey: {
        table: "users",
        field: "id",
      },
    },

    settings: DataTypes.JSON,
  };

  static defaults = {
    settings: {},
    created_at: new Date(),
    updated_at: new Date(),
  };
}
