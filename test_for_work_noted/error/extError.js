class ExtError extends Error {
    constructor(status,message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message) {
        return new ExtError(404,message);
    }

    static internalError(message) {
        return new ExtError(500,message);
    }

    static forbidden(message) {
        return new ExtError(403,message);
    }
}

module.exports = ExtError;