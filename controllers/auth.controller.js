const login = (req, res) => {
  res.send("Login Successful");
};

const register = (req, res) => {
  res.send("RegistrationLogin Successful");
};

module.exports = {
  register,
  login,
};
