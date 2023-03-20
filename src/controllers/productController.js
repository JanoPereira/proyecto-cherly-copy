
const db = require('../database/models');
const controller = {
    list: async(req,res)=>{
        try {
            /* let products = await db.Product.findAll({
                include:['category']
            }); */
            return res.render('productList')
        } catch (error) {
            console.log(`Falle en productController.list: ${error}`);
            return res.json(error);
        }
    },
    detail: async(req,res)=>{
        try {
            return res.render('productDetail')
        } catch (error) {
            console.log(`Falle en productController.detail: ${error}`);
            return res.json(error);
        }
    }
};

module.exports = controller;
