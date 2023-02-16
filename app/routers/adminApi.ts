import { createMonitorPreValidation } from "@/interfaces/requests/monitors/CreateMonitor";
import { FastifyInstance, FastifyPluginOptions, FastifyRequest } from "fastify";

import * as monitor from '@/controllers/admin/Monitor';

export default async (route: FastifyInstance, opts: FastifyPluginOptions) => {
    route.post('/monitor/create', { preValidation: createMonitorPreValidation }, (req, res) => monitor.create(route, req, res));
};
