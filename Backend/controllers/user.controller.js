
const userModel = require('../models/user.model')
const userService = require('../services/user.service');
const {validationResult} = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
  

    const {fullname,email,password} = req.body;
   
    const isUserExist = await userModel.findOne({email});
    if(isUserExist){
        return res.status(400).json({message:'User already exist'});
    }
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({token,user});
}

module.exports.loginUser = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;

    const user = await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message:'Invalid Email or Password'});
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:'Invalid Email or Password'});
    }
    const token = user.generateAuthToken();

    res.cookie('token',token);
    res.status(200).json({token,user});
}

module.exports.getUserProfile = async (req,res,next)=>{
   res.status(200).json(req.user);
}

module.exports.logoutUser = async (req,res,next)=>{
    // res.clearCookie() doesn't delete req.cookies.token during the current request.
    res.clearCookie('token');
    //so here we can access the token
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if (!token) {
    return res.status(400).json({ message: "Token not found" });
    }
    await blacklistTokenModel.create({token});
    res.status(200).json({message:'Logged out successfully'});
}

