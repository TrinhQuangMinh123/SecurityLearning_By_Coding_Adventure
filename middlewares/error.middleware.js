const errorMiddleware = (err, req, res, next) => {
    try{
        let error = {... err};

        error.message = err.message;

        console.error(err);

        // Mongoose  bad ObjectId
        if(err.name === 'Cast Error'){
            const message = "Resource Not Found";
            error = new Error(message);
            error.status = 404;
        }

        //Mongoose duplicate Key
        if(err.code === 1100 ){
            const message = "Duplicated field value entered";
            error = new Error(message);
            error.status = 400;
        }

        //Mongoose validation error
        if(err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message);
            error = new Error(message.join(', '));
            error.status = 400;
        }

        res.status(error.statusCode || 500).json({success: false, message: error.message || 'Server Error'});
    }catch(error){
        next(error);
    }
}

export default errorMiddleware;