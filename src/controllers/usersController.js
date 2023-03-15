
const db = require('../database/models');
const controller = {
    list: async(req,res)=>{
        try {
            let users = await db.User.findAll();
            return res.send(users)
        } catch (error) {
            console.log(`Falle en usersController.list: ${error}`);
            return res.json(error);
        }
    }
};

module.exports = controller;
