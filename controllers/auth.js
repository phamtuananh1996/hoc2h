const User = require('../models/User');
const request = require('request-promise');

module.exports = function (router) {

  // login with facebook
  router.post('/auth/login-facebook', function (req, res) {

    let accessToken = req.body.accessToken;
    let provider = req.body.provider;

    let options = {
      uri: 'https://graph.facebook.com/me?fields=email&access_token=' + accessToken,
      method: 'GET'
    };

    request(options).then(response => {

      let results = JSON.parse(response);

      let user = new User();
      user.provider_id = results.id;
      user.provider_name = provider;
      user.email = results.email;
      user.save(function (err, user) {
        if (user) {
          let token = user.signJwt(user.id);
          return res.status(200).json({token: token});
        } else {
          return res.status(401).json('add user fail');
        }
      });

    }).catch(err => {
      return res.status(401).json('access token khong hop le');
    });

  });

  // user register
  router.post('/auth/user-register', function (req, res, next) {

    req.check('username', 'username khong duoc de trong').notEmpty();
    req.check('email', 'email khong duoc de trong').notEmpty();
    req.check('email', 'email khong dung dinh dang').isEmail();
    req.check('password', 'password khong duoc de trong').notEmpty();
    req.check('passwordConfirmation', 'passwordConfirmation khong duoc de trong').notEmpty();
    req.check('password', 'password khong trung khop').custom(value => {return value == req.body.passwordConfirmation});

    User.findOne({username: req.body.username}, function (err, user) {

      if (user) req.check('username', 'username da ton tai').custom(value => {return false});

      User.findOne({email: req.body.email}, function (err, user) {

        if (user) req.check('email', 'email da ton tai').custom(value => {return false});

        let errors = req.validationErrors();
        if (errors) return res.status(422).json(errors);
        return next();

      });

    });

  }, function (req, res) {

    let user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = user.hashSync(req.body.password);
    user.role = 2;
    user.save(function (err, user) {

      if (user) {
        let token = user.signJwt(user.id);
        return res.status(200).json({token: token});
      }

      return res.status(401).json('dang ky that bai');

    });

  });

  // user login
  router.post('/auth/user-login', function (req, res, next) {

    req.check('username', 'username khong duoc de trong').notEmpty();
    req.check('password', 'password khong duoc de trong').notEmpty();

    let errors = req.validationErrors();
    if (errors) return res.status(422).json(errors);
    return next();

  }, function (req, res) {

    let query = User.findOne();
    query.or([{username: req.body.username}, {email: req.body.username}]);
    query.exec(function (err, user) {

      if (user) {
        if (user.compareSync(req.body.password)) {
          let token = user.signJwt(user.id);
          return res.status(200).json({token: token,user:user});
        } else {
          return res.status(401).json('dang nhap that bai');
        }
      } else {
        return res.status(401).json('username khong ton tai');
      }
    });

  });

  // admin login
  router.post('/auth/admin-login', function (req, res, next) {

    req.check('username', 'username khong duoc phep de trong').notEmpty();
    req.check('password', 'password khong duoc phep de trong').notEmpty();

    let errors = req.validationErrors();
    if (errors) return res.status(422).json(errors);
    return next();

  }, function (req, res) {

    User.findOne({username: req.body.username}, function (err, user) {

      if (err) return res.status(500).json(err);
      if (user) {

        if (user.role != 1 || ! user.compareSync(req.body.password)) return res.status(401).json('dang nhap that bai');
        let token = user.signJwt(user.id);
        return res.status(200).json({token: token,user:user});

      }

      return res.status(401).json('dang nhap that bai');

    });

  });

  // set user admin
  router.get('/auth/set-admin', function (req, res) {

    User.remove({}, function (err) {

      if (! err) {

        let user = new User();
        user.username = 'admin';
        user.password = user.hashSync('1');
        user.role = 1;
        user.save(function (err, user) {

          if (user) return res.status(200).json('truncated users, set admin with account: admin, password: 1, role: 1');
          return res.status(401).json('set user admin error');

        });

      }

    });

  });

}