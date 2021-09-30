
//Para restringir el ingreso solamente a los administradores y no a cualquier usuario
let admins = ['Greta', 'Ada', 'Vim', 'Tim'];

module.exports = (req, res, next) => {
if(admins.includes(req.query.user)){
    next()
}else{
    res.redirect('/noEntry')
}
}