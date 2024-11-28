import { Model, DataTypes } from "https://deno.land/x/denodb/mod.ts";

export class App extends Model {
  static override table = "apps";
  static override timestamps = true;

  static override fields = {
    id: { primaryKey: true, type: DataTypes.UUID, default: DataTypes.UUIDV4 },
    name: DataTypes.STRING,
    platform: DataTypes.STRING,
  };

  static defaults = {
    platform: "ios",
    created_at: new Date(),
    updated_at: new Date(),
  };
}
