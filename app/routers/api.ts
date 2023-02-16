import { FastifyInstance, FastifyPluginOptions } from "fastify";

import * as status from '@/controllers/Status';
import * as monitor from '@/controllers/Monitor';

export default async (route: FastifyInstance, opts: FastifyPluginOptions) => {
    route.get('/status', (req, res) => status.all(route, req, res));
    route.get('/monitors', (req, res) => monitor.all(route, req, res));
};