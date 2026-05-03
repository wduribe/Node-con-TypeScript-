import { Router, type Request, type Response } from 'express';
import { HttpError } from './domain/error/httpError.ts';



export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        router.get('/', (req: Request, res: Response) => {
            throw new HttpError({status: 401, message: 'Not Authorized'});
        });

        return router


    }


}