module.exports = (req, res, next) => {
  console.log();
  console.log("Passei no middleware GLOBAL.");
  console.log();
  next();
};
