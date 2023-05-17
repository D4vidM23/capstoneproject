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

module.exports.updateRock = async function(req, res){
    const rock = await Rock.update({
        seller: req.body.seller,
        product: req.body.product,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price,
        weightvolume: req.body.weightvolume,
        }, {
        where: {
            id: req.params.id
        }
        });
    res.redirect (`/viewRocks/view/${req.params.id}`);
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

