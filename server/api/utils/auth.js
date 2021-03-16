exports.isLoggedIn = (req, res, next) => {
  if (req.user?.identifier()) {
    return next()
  }

  return res.redirect("/login")
}
exports.isAdmin = (req, res, next) => {
  if (req.user?.isAdmin()) {
    return next()
  }

  return res.redirect("/login")
}
