const jwt = require('jsonwebtoken')

module.exports.validateToken = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({
        status: 401,
        message: 'Token missing'
      })
    }

    const token = req.headers.authorization.split('Bearer ')[1]

    const decodedToken = jwt.verify(
      token,
      process.env.SECRET_KEY || 'default-secret-key'
    )

    req.user = decodedToken

    next()
  } catch (error) {
    return res.status(401).send({
      status: 401,
      message: 'Invalid token'
    })
  }
}
