const jwt = require('jsonwebtoken')

module.exports.validateToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res.status(401).send({ message: 'Token missing' })
    }

    const token = authHeader.split('Bearer ')[1]
    const decodedToken = jwt.verify(
      token,
      process.env.SECRET_KEY || 'default-secret-key'
    )

    req.user = decodedToken 
    next()
  } catch (error) {
    return res.status(401).send({ message: 'Invalid token' })
  }
}
