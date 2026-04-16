class apiError extends Error{
    constructor(statusCode, message){
        super(message)       // call parent class constructor
        this.statusCode = statusCode
        this.isOperational = true    //
        Error.captureStackTrace(this, this.constructor) // give error info
    }

    static badRequest(message="bad request"){
        return new apiError(400, message)
    }

    static unAuthourized(message="unauthourized "){
        return new unAuthourized(401, message)
    }
}


export default apiError