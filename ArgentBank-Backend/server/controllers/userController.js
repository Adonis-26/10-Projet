const userService = require('../services/userService')

module.exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body)
    res.status(200).send({ body: user })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

module.exports.loginUser = async (req, res) => {
  try {
    const token = await userService.loginUser(req.body)
    res.status(200).send({ body: token })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

module.exports.getUserProfile = async (req, res) => {
  try {
    const user = await userService.getUserProfile(req.user.id)
    res.status(200).send({ body: user })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

module.exports.updateUserProfile = async (req, res) => {
  try {
    const user = await userService.updateUserProfile(
      req.user.id,
      req.body
    )
    res.status(200).send({ body: user })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}
