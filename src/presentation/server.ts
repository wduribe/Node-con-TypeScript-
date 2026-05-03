import express, { Router } from 'express';
import { corsAdapter } from '../config/cors.adapter.ts';
import { handlerErrorMiddleware } from './middlewares/handlerError.middleware.ts';


interface Options {
    port: number,
}

export class Server {

    private readonly port: number;
    private readonly app = express();

    constructor(options: Options) {
        const { port } = options;

        this.port = port;
        this.config();


    }

    private config() {
        this.app.use(express.json())
        this.app.use(corsAdapter);
    }

    public setRoutes(routes: Router) {
        this.app.use('/api', routes);
        this.app.use(handlerErrorMiddleware);
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`🚀 Server is running on http://localhost:${this.port}`);
        });
    }

}