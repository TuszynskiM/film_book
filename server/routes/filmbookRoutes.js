module.exports = function(app) {
  const accounts = require('../controllers/filmbookController');

  // filmbook Routes
  app.route('/tasks')
      .get(accounts.list_all_accounts())
      .post(accounts.create_a_account());


  app.route('/tasks/:taskId')
      .get(accounts.read_a_account())
      .put(accounts.update_a_account())
      .delete(accounts.delete_a_account());
};
