module.exports = (req, res, next) => {
  const emailValid = (email) => {
    const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const isRegexTrue = emailRegexp.test(email);
    isRegexTrue ? next() : res.status(400).json({ message: "mail non valide" });
  };
  emailValid(req.body.email);
};
