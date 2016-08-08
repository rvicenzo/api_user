var User = {

  attributes: {
    email    : { type: 'email',  required: true, unique: true },
    name     : { type: 'string', required: true },
    password : { type: 'string', required: true }
  }
};

module.exports = User;
