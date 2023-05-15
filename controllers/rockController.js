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


module.exports.renderEditForm = async function(req, res){
    const rock = await Rock.findByPk(req.params.id);
    res.render('viewRocks/edit', {rock});
}


module.exports.renderAddForm = function(req, res){
    const rock = {
        seller: '',
        product: '',
        image: '',
        description: '',
        price: '',
        weightvolume: '',
    }
    res.render('viewRocks/add', rock);
}

module.exports.updateCourse = async function(req, res){
    const rock = await Rock.Update({
        seller: '',
        product: '',
        image: '',
        description: '',
        price: '',
        weightvolume: '',
    })
    res.render('viewRocks/add', rock);
}