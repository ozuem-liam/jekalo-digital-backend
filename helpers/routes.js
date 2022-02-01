const accountRoutes = require('../apis/accountModule/account.route');

module.exports = function (app) {
  app.use('/api', accountRoutes);
};
