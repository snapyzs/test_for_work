const {User} = require('../models/models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ExtError = require("../error/extError");
const sendMailer = require("../mail/sendMailer");

const generateJwt = (id,email) => {
    return jwt.sign({id,email}, process.env.SECRET_KEY, {expiresIn:'24h'});
}

class UserController {
    async register(req,res,next) {
        const {email,password} = req.body
        if (!email || !password) {
            return next(ExtError.badRequest("Not correct email or password!"));
        }
        const candidate = await User.findOne({where:{email}});
        if (candidate) {
            return next(ExtError.badRequest("User already exist!"));
        }
        const hashPassword = await bcrypt.hash(password,5);
        const user = await User.create({email,password:hashPassword});
        const token = generateJwt(user.id,user.email);
        sendMailer(email);
        return res.json({token});

    }

    async login(req,res,next) {
        const {email,password} = req.body;
        const user = await User.findOne({where:{email}});
        if (!user) {
            return next(ExtError.internalError("User not found!"));
        }
        let comparePassword = bcrypt.compareSync(password,user.password);
        if (!comparePassword) {
            return next(ExtError.internalError("Not correct email or password!"));
        }
        const token = generateJwt(user.id,user.email);
        return res.json({token});

    }
    async update(req,res,next) {
        const {email,password} = req.body;
        const user_email = req.user.email;
        const hashPassword = await bcrypt.hash(password,5);
        const result = await User.update({email:email,password:hashPassword},{where:{email:user_email}});
        return res.json(Boolean(result));
        


    }
    async delete(req,res,next) {
        const {email} = req.body;
        const result = await User.destroy({where:{email}})
        return res.json(Boolean(result));
    }
    
}

module.exports = new UserController();