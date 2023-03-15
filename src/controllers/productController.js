
const db = require('../database/models');
const controller = {
    list: async(req,res)=>{
        try {
            let products = await db.Product.findAll({
                include:['category']
            });
            return res.render('productList')
        } catch (error) {
            console.log(`Falle en productController.list: ${error}`);
            return res.json(error);
        }
    }
};

module.exports = controller;
