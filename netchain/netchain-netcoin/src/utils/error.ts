export class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class NotFoundError extends CustomError {
    constructor(resource: string) {
        super(`${resource} not found`);
    }
}

export class ValidationError extends CustomError {
    constructor(message: string) {
        super(`Validation Error: ${message}`);
    }
}

export class DatabaseError extends CustomError {
    constructor(message: string) {
        super(`Database Error: ${message}`);
    }
}

export class UnauthorizedError extends CustomError {
    constructor() {
        super('Unauthorized access');
    }
}