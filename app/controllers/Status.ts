import { Request } from "@interfaces";
import { Monitor, Status } from "@models";
import { Success } from "@responses";
import dayjs from "dayjs";

export const all: Request = async (app, req, res) => {
    const status = [];
    const date = new Date();
    date.setDate(date.getDate() - 30);
    const data = await Status.find().gte('time', dayjs(date).unix());

    for (const s of data) {
        const monitor = await Monitor.findById(s.host);
        status.push({ id: s._id, monitorId: monitor?._id, monitorName: monitor?.name, time: s.time, alive: s.alive });
    };

    return Success(res, status);
};