import { Model, DataTypes } from "https://deno.land/x/denodb/mod.ts";

// Define the User model
export class User extends Model {
  static override table = "users";
  static override timestamps = true;

  static override fields = {
    id: { primaryKey: true, type: DataTypes.UUID, default: DataTypes.UUIDV4 },

    device_id: { type: DataTypes.ARRAY(DataTypes.STRING), default: [] },
    app_id: DataTypes.STRING,
  };

  static defaults = {
    device_id: [],
    created_at: new Date(),
    updated_at: new Date(),
  };
}
