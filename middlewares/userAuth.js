const jwt = require("jsonwebtoken")
const JWTSECRET = "senhajwt"

module.exports = (req, res, next) => {
  const authToken = req.headers['authorization']
  if(authToken == undefined) res.sendStatus(401)

  let bearer = authToken.split(" ")
  let token = bearer[1]

  jwt.verify(token, JWTSECRET, (err, data) => {
    if(err) res.sendStatus(401)
    req.token = token
    req.user = { id: data.id, email: data.email }
    next()
  })
}
