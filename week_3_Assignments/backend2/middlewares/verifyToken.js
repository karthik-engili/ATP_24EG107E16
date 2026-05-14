import jwt from "jsonwebtoken";
const {verify} = jwt
export function verifyToken(req,res,next){
    //token verification logic
    const token = req.cookies?.token;
    //if req from unauthorized user
    if(!token){
        return res.status(401).json({message:"Please Login"})
    }
    // if token exists
    // checking token verification
    try{
    const decodedToken=verify(token,'abcdef')
    console.log(decodedToken)

    req.user=decodedToken // to send decoded token to route 
    //  call next
    // if token is valid then only call next() otherwise catch block will execute
    next();
    }catch(err){
        res.status(401).json({message:"session expired, please relogin"})
    }
}