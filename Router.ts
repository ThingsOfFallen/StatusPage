import { FastifyInstance, FastifyPluginOptions } from "fastify";

import * as status from '@/controllers/Status';

export default async (route: FastifyInstance, opts: FastifyPluginOptions) => {
    route.get('/status', (req, res) => status.status(route, req, res));
};