const service=require("../Services/UserService")
const sanitize = require("mongo-sanitize");

exports.RegisterUser=async(req,res,next)=>{
    try {
        const request = sanitize(req.body);//avoiding unwanted stuff from the request
        const response=await service.UserRegisterService(request);
        res.status(response.statusCode).json({
            status:response.status,
            data:response.data
        })
    } catch (error) {
        next(error)
    }

}
exports.GetUser=async(req,res,next)=>{
    try {
        const request = sanitize(req.params);//avoiding unwanted stuff from the request
        const response=await service.GetUserService(request)
        res.status(response.statusCode).json({
            status:response.status,
            data:response.data
        })  
    } catch (error) {
        next(error)
    }
}