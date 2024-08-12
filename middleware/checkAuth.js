const {verifyToken}=require('../services/token');

function checkForAuth() {
    return(req,res,next)=>{
        const tokenValue=req.cookies["token"]
        if (tokenValue) {
            try {
              const decodedToken = verifyToken(tokenValue);
              req.user = decodedToken;
            } catch (error) {
              // Handle token verification errors
              console.error('Error verifying token:', error);
              res.status(401).send('Invalid token');
              return;
            }
          }
next()
    };
}
module.exports={
    checkForAuth
}