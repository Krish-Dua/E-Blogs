const jwt=require('jsonwebtoken');
const secret="kri$h0p"
const genToken=(user)=>{
    const payload={
        _id:user._id,
        email:user.email,
        username:user.username,
    }
    return jwt.sign(payload,secret)
}

const verifyToken=(token)=>{
    const payload=jwt.verify(token,secret)
    return payload
}

module.exports={
    genToken,
    verifyToken
}