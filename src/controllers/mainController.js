const fetch = require('node-fetch');

const controller = {
    list: (req,res)=>{
        return res.render('index')
    }
};

module.exports = controller;