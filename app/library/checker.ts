import pingChecker from "./pingChecker";
import { Monitor } from "@models";
import httpChecker from "./httpChecker";
import { schedule } from 'node-cron';

export default async () => {
    schedule('*/1 * * * *', async () => {
        const pingMonitors = await Monitor.find({ type: 1 });
        const httpMonitors = await Monitor.find({ type: 2 });

        for (const pMonitor of pingMonitors) {
            pingChecker(pMonitor);
        };

        for (const hMonitor of httpMonitors) {
            httpChecker(hMonitor);
        };
    });
};