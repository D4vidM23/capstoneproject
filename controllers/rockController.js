const {Rock} = require('../models')

module.exports.viewAll = async function (req, res) {
    const rocks = await Rock.findAll();
    res.render('viewRocks/viewAll', {rocks});
};

module.exports.viewService = async function (req, res) {
    const rocks = await Rock.findAll();
    res.render('misc/customerService', {rocks});
};