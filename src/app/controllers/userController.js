const { Sequelize } = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(config.development);
const mailer = require('../utils/mailer')
const User = require('../models/user')(sequelize, Sequelize);
const httpError = require('http-errors');
const { v4: uuid} = require('uuid');
const bcrypt = require('bcrypt');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return emailRegex.test(email);
  }
function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^[0-9]{10}$/;
  
    return phoneRegex.test(phoneNumber);
  }

// API đăng ký tài khoản
class UserController {
    async Register(req, res, next) {
        try {
            if (!validatePhoneNumber(req.body.username) && !validateEmail(req.body.username)) {
                throw httpError.BadRequest('Định dạng user name không hợp lệ');
            }
            if (!validateEmail(req.body.email)) {
                throw httpError.BadRequest('Định dạng email không hợp lệ');
            }
            if (!validatePhoneNumber(req.body.phone)) {
                throw httpError.BadRequest('Định dạng số điện thoại không hợp lệ');
            }
            const { username, user_type } = req.body;
            let identifyCode = '';
            const isExistUserName = await User.findOne({ where: { username: username } });

            if (isExistUserName) throw httpError.Conflict(`${username} đã được đăng ký!!`);
            if(user_type === 'owner'){
                identifyCode = uuid();
            }
            
            const hashedPassword = bcrypt.hashSync(req.body.password, 10);
            const formData = {
                username: req.body.username,
                full_name: req.body.full_name,
                phone: req.body.phone,
                email: req.body.email,
                password: hashedPassword,
                date_of_birth: req.body.birthday,
                avatar: req.body.avatar,
                gender: req.body.gender,
                identify_code: identifyCode,
                is_verify: false,
                user_type: req.body.user_type,
            };
            console.log(identifyCode);
            const user = await User.create(formData);
            console.log(`${process.env.APP_URL}/verify-account?email=${user.email}`);
            mailer.sendMail(user.email, "Verify Email", `<a href="${process.env.APP_URL}/verify-account?email=${user.email}"> Ấn vào đây để xác thực tài khoản </a>`);
            res.json({
                status: "successfully",
                element: user,
            })
        } catch (error) {
            next(error);
        }
    }
    async VerifyAccount (req, res, next) {
        try {
            const { email } = req.query;
            const user = await User.findOne({ where: { email: email } });
            
            if (!user || user.is_verify == true) {
                return res
                .status(400)
                .json({ message: "Liên kết xác nhận không hợp lệ" });
            
                }
            
            // Cập nhật trường is_verify của user thành true
            user.is_verify = true;
            await user.save();
            return res
            .status(200)
            .json({ message: "Kích hoạt tài khoản thành công" });
            } 
            catch (error) 
            {
                console.error("Xác nhận kích hoạt tài khoản không thành công", error);
                return res
                .status(500)
                .json({ message: "Xác nhận kích hoạt tài khoản không thành công" });
        }
    }
    
}
module.exports = new UserController();
