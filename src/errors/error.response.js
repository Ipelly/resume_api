'use strict'


class ErrorResponse extends Error {
    constructor(response){
        super(response);
        this.name = "Server Response Error";
        Error.captureStackTrace(this, this.constructor);
        this.status = 503;
        this.errorResponse = response;
    }
    toJSON(){
        return {
            error :{
                name : this.name,
                message : this.message,
                stacktrace: this.stack
            }
        }
    }
}

module.exports = ErrorResponse;
