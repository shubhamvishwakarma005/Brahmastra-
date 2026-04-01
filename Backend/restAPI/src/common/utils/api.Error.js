class apiError extends Error {
    constructor(statusCode , message){
        super(message)
        this.statusCode = statusCode
        this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }

    static badRequest(message= "Bad Request"){
        return new apiError(400, message)
    }

    static badRequest(message= "unauthourized"){
        return new apiError(403, unauthourized)
    }
}

export default apiError