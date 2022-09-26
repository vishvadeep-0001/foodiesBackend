import ErrorHandler from "../utils/errorHandler.js";

export const isAuthenticated = (req, res, next)=>{
    const token = req.cookies["connect.sid"];
    if(!token){
        return next(new ErrorHandler("Not Logged in", 401))
    }
    next();
}

export const authorizeAdmin = (req, res, next)=>{
    if(req.user.role!=="admin"){
        return next(new ErrorHandler("Only Admin Allowed For This Route", 405))
    }
    next();
}