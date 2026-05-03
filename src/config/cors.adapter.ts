import cors from "cors";
import { envsAdapter } from "./envs.adapter.ts";

const { FRONTED_URL_DEV } = envsAdapter;

const allowedOrigins = [FRONTED_URL_DEV];

export const corsAdapter = cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error('Cors not allowed'));
    },
    credentials: true,
})