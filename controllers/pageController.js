const {User, Role} = require("../models");

module.exports.viewProfile = async function(req, res){
    const user = await User.findByPk(req.params.id);
    const role = await Role.findByPk(req.params.id);
    res.render('pages/profile', {user, role});
}