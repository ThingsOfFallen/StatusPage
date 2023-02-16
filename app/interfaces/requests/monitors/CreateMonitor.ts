import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

export default interface CreateMonitor {
    type: 1|2|3;
    name: string;
    host: string;
};

export type CreateMonitorRequest = FastifyRequest<{ Body?: CreateMonitor }>;
export const createMonitorPreValidation = (req: CreateMonitorRequest, res: FastifyReply, next: HookHandlerDoneFunction) => next();