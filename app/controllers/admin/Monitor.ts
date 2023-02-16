import CreateMonitor, { CreateMonitorRequest } from "@/interfaces/requests/monitors/CreateMonitor";
import gen from "@/utilities/gen";
import { Request } from "@interfaces";
import { Monitor } from "@models";
import { BadRequest, Success } from "@responses";

export const create: Request = async (app, req: CreateMonitorRequest, res) => {
    if (!req.body) return BadRequest(res, 'ERR.BODY.UNDEFINED', 'The body of the request has no data.');
    const id = gen('id');
    const monitor = await Monitor.create({ _id: id, name: req.body.name, host: req.body.host, type: req.body.type, maintenance: false });
    return Success(res, { id: monitor._id });
};