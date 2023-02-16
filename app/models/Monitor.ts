import { model, Schema, SchemaTypes } from "mongoose";
import { MonitorSchema } from "@interfaces";

const MonitorSchema = new Schema<MonitorSchema>({
    _id: SchemaTypes.Number,
    name: { type: SchemaTypes.String, required: true },
    host: { type: SchemaTypes.String, required: true },
    type: { type: SchemaTypes.Number, required: true },
    maintenance: { type: SchemaTypes.Boolean, required: true }
});

export default model<MonitorSchema>('monitors', MonitorSchema);