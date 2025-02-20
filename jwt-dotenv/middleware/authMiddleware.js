const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next)=>{
    const token = req.header("Authorization");
    if(!token){
        return res
        .status(401)
        .json({error:"Unauthorized - No token provided"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        console.error(error);
        res.status(400).json({error:"Unauthorized - Invalid token"});
    }
}
module.exports = authMiddleware;