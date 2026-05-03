import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../domain/error/httpError.ts";


export const handlerErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof HttpError) {
        return res.status(err.status).json({ error: err.message })
    }

    return res.status(500).json({ error: 'Internal Server Error!' });

}
