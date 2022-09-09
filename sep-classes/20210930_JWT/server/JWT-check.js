const {sign, verify} = require("jsonwebtoken");

const createToken = (user) => {
    const accesToken = sign({
        username: user.username, id: user._id},
        process.env
    })
};


const checkToken = (req, res, next)=> {

    // later as middleware
    // next

const validToken = await verify(accesToken.process.env.TOKEN_TEXT);
if (validToken){
    // later as middleware
    // next();
    return res.status(200).json({auth:true, message: "User is Authen!)
}
}

module.exports = {createToken};