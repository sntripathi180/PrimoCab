const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req,res,next)=>{
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}

const {fullname,email,password,vehicle} = req.body;

const isCaptainAlreadyExist = await captainModel.findOne({
    email
});

if(isCaptainAlreadyExist){
    return res.status(400).json({message:'Captain already exists'});
}

const hashedPassword = await captainModel.hashPassword(password);


const captain = await captainService.createCaptain({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedPassword,
    color:vehicle.color,
    plate:vehicle.plate,
    capacity:vehicle.capacity,
    vehicleType:vehicle.vehicleType
});

const token = captain.generateAuthToken();

res.status(201).json({token,captain});
};

module.exports.loginCaptain = async (req,res,next)=>{
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}

const {email,password} = req.body;

const captain = await captainModel.findOne({
    email
}).select('+password');

if(!captain){
    return res.status(400).json({message:'Invalid email or password'});
}       

const isPasswordMatch = await captain.comparePassword(password);

if(!isPasswordMatch){
    return res.status(400).json({message:'Invalid email or password'});
}

const token = captain.generateAuthToken();
res.cookie('token',token);
res.status(200).json({token,captain});

};

module.exports.getCaptainProfile = async (req,res,next)=>{
const captain = req.captain;
res.status(200).json({captain:req.captain});
};

module.exports.logoutCaptain = async (req,res,next)=>{
const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
if(!token){
    return res.status(400).json({message:'Invalid token'});
}
await blacklistTokenModel.create({token});
res.clearCookie('token');
res.status(200).json({message:'Captain logged out successfully'});
};

