var User = {

  attributes: {
    email    : { type: 'email',  required: true },
    name     : { type: 'string', required: true },
    country  : { type: 'string', required: true },
    password : { type: 'string', required: true }
  }
};

module.exports = User;
