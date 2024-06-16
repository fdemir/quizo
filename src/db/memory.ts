import Redis from "ioredis";

export const memdb = new Redis(process.env.REDIS_URL!);
