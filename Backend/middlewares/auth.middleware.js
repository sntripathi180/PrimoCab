const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
//   console.log('TOKEN:', token);
  if(!token) return res.status(401).json({message:'Unauthorized (no token)'});

  const isBlacklisted = await blackListTokenModel.findOne({token:token});
  if(isBlacklisted) return res.status(401).json({message:'Unauthorized (blacklisted)'});

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log('DECODED:', decoded);
    const user = await userModel.findById(decoded._id);
    // console.log('USER:', user);
    if (!user) return res.status(401).json({ message: 'Unauthorized (user not found)' });
    req.user = user;
    return next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({message:'Unauthorized (token error)'});
  }
}


module.exports.authCaptain = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    // console.log("captain token",token);
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }

    const isBlacklisted = await blackListTokenModel.findOne
    ({token:token});
// console.log("blacklisted token",isBlacklisted);
    if(isBlacklisted){
        return res.status(401).json({message:'Unauthorized'});
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        // console.log("captain",captain)
        req.captain = captain;
        return next();
    } catch(err) {
        console.log(err);
        return res.status(401).json({message:'Unauthorized'});
    }
}