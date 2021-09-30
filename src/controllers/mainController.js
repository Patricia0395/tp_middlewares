module.exports = {
    index: (req, res) => res.render('index'),
    contact : (req, res) => res.render('contact'),
    about : (req, res) => res.render ('about'),
    music : (req, res) => res.render('music'),
    admin : (req, res) => res.render('admin'),
    login : (req, res) => res.render('login'),
    noEntry : (req, res) => res.render('noEntry')
}