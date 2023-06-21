const { Sequelize } = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(config.development);
const Store = require('../models/store')(sequelize, Sequelize);
const JobRequest = require('../models/jobrequest')(sequelize, Sequelize);
const httpError = require('http-errors');


class StoreController {
    async sendRequest(req, res, next) {
        try {
            const { store_id } = req.params;
            const { userId } = req.body;
        
            // Kiểm tra xem cửa hàng có tồn tại hay không
            const store = await Store.findByPk(store_id);
            if (!store) {
              throw httpError.NotFound('Cửa hàng không tồn tại');
            }
        
            // Tạo yêu cầu làm việc mới
            const jobRequest = await JobRequest.create({
              store_id: store_id,
              freelancer_id: userId,
              request_type: "freelancer",
              status: "Đang chờ",
            });
        
            res.json({
              status: 'success',
              message: 'Yêu cầu làm việc đã được gửi',
              data: jobRequest,
            });
          } catch (error) {
            next(error);
          }
        }
    }
    
module.exports = new StoreController();
