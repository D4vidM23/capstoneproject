const {Rock} = require('../models')

module.exports.viewAll = async function (req, res) {
    const rocks = await Rock.findAll();
    res.render('viewRocks/viewAll', {rocks});
};

module.exports.viewService = async function (req, res) {
    const rocks = await Rock.findAll();
    res.render('misc/customerService', {rocks});
};

module.exports.viewRock= async function(req, res){
    const rock = await Rock.findByPk(req.params.id);
    res.render(`viewRocks/view`, {rock});
}





module.exports.renderAddForm = function(req, res){
    const rock = {
        creator_name: '',
        product_name: '',
        image: '',
        description: '',
    }
    res.render('viewRocks/add', rock);
}