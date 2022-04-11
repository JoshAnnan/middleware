const authRequire = (req, res, next) => {
  const body = req.body;

  if (body.username !== "Joshua" || body.password !== "secret") {
    return res.send("invalid credential");
  }

  next();
};

module.exports = {
  authRequire,
};
