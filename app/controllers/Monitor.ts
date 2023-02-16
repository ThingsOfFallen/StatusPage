import { Request } from "@interfaces";
import { Monitor } from "@models";
import { Success } from "@responses";

export const all: Request = async (app, req, res) => {
    const monitors = await Monitor.find();
    return Success(res, monitors);
};