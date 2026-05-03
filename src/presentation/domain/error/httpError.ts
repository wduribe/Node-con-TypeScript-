

interface Options {
    status: number;
    message: string;
}


export class HttpError extends Error {

    public status: number;
    public isOperational: boolean;

    constructor(options: Options) {

        const { status, message } = options;
        super(message);

        this.status = status;
        this.isOperational = true;

        Object.setPrototypeOf(this, HttpError.prototype);

    }

}