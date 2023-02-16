import fastify from "fastify";
import fastifyStatic from '@fastify/static';
import fastifyCors from "@fastify/cors";
import { join } from "path";
import dbConnect from "@/utilities/dbConnect";
import checker from "@/library/checker";
import api from "@/routers/api";
import adminApi from "@/routers/adminApi";

const dev = process.argv.includes('--dev');
const app = fastify({ logger: dev });
app.register(api, { prefix: '/api' });
app.register(adminApi, { prefix: '/api/admin' });

const frontend = dev ? join(__dirname, 'frontend/public') : join(__dirname, '../frontend/public');
app.register(fastifyStatic, { root: `${frontend}/assets`, prefix: '/assets' });
app.register(fastifyCors, { origin: true });

dbConnect();
checker();

app.get('/*', (_req, res) => {
    return res.sendFile('index.html', frontend);
});

app.listen({ port: parseInt(process.env.APP_PORT!), host: '0.0.0.0' });