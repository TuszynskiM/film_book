const mongoose = require('mongoose'),
    Accounts = mongoose.model('Accounts');

exports.list_all_accounts = function(req, res) {
  Accounts.find({}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};




exports.create_a_account = function(req, res) {
  const new_account = new Accounts(req.body);
  new_account.save(function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.read_a_account = function(req, res) {
  Accounts.findById(req.params.accountId, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.update_a_account = function(req, res) {
  Accounts.findOneAndUpdate({_id: req.params.accountId}, req.body, {new: true}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.delete_a_account = function(req, res) {


  Accounts.remove({
    _id: req.params.account
  }, function(err, account) {
    if (err)
      res.send(err);
    res.json({ message: 'Konto usunięte poprawnie', account: account });
  });
};