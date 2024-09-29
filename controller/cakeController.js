const cakeController = {
  index: (req, res) => {
      res.render('home', {title: 'CAKE'});
  },
  about: (req, res) => {
      res.render('about', {title: 'CAKE'});
  },
  menuprice: (req, res) => {
      res.render('menuprice', {title: 'CAKE'});
  },
  masterchef: (req, res) => {
      res.render('masterchef', {title: 'CAKE'});
  },
  contact: (req, res) => {
      res.render('contact', {title: 'CAKE'});
  }
};

module.exports = cakeController;