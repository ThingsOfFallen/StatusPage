import gen from "@/utilities/gen";
import { MonitorSchema } from "@interfaces";
import { Status } from "@models";
import axios from 'axios';
import dayjs from "dayjs";

export default (monitor: MonitorSchema) => {
    axios.get(monitor.host).then(async (data) => {
        const id = gen('id');
        await Status.create({ _id: id, time: dayjs().unix(), host: monitor._id, alive: data.status === 200 });
    });
};