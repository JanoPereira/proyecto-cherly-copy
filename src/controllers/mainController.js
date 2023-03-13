const fetch = require('node-fetch');

const controller = {
    list: (req,res)=>{
        return res.send('Tas en mainList')
    }
};

module.exports = controller;