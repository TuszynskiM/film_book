module.exports = function(app) {
  const accounts = require('../controllers/filmbookController');


  // filmbook Routes
  app.route('/accounts')
      .get(accounts.list_all_accounts)
      .post(accounts.create_a_account);


  app.route('/account/:accountId')
      .get(accounts.read_a_account)
      .put(accounts.update_a_account)
      .delete(accounts.delete_a_account);
};
