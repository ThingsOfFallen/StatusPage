import { model, Schema, SchemaTypes } from "mongoose";
import { StatusSchema } from "@interfaces";

const StatusSchema = new Schema<StatusSchema>({
    _id: SchemaTypes.Number,
    time: { type: SchemaTypes.Number, required: true },
    host: { type: SchemaTypes.Number, required: true },
    alive: { type: SchemaTypes.Boolean, required: true }
});

export default model<StatusSchema>('status', StatusSchema);