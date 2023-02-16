import gen from '@/utilities/gen';
import { Status } from 'Models';
import { promise } from 'ping';
import dayjs from 'dayjs';
import { MonitorSchema } from '@interfaces';

export default (monitor: MonitorSchema) => {
    promise.probe(monitor.host).then(async (x) => {
        const id = gen('id');
        await Status.create({ _id: id, time: dayjs().unix(), host: monitor._id, alive: x.alive });
    });
};