const User = require('../database/models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY || 'default-secret-key'

module.exports.createUser = async serviceData => {
  try {
    const existingUser = await User.findOne({ email: serviceData.email })
    if (existingUser) throw new Error('Email already exists')

    const hashPassword = await bcrypt.hash(serviceData.password, 12)
    const newUser = new User({
      email: serviceData.email,
      password: hashPassword,
      firstName: serviceData.firstName,
      lastName: serviceData.lastName,
      userName: serviceData.userName
    })
    return await newUser.save()
  } catch (error) {
    console.error('Error in createUser', error.message)
    throw error
  }
}

module.exports.loginUser = async serviceData => {
  try {
    const user = await User.findOne({ email: serviceData.email })
    if (!user) throw new Error('User not found')

    const isValidPassword = await bcrypt.compare(serviceData.password, user.password)
    if (!isValidPassword) throw new Error('Invalid password')

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1d' })
    return { token }
  } catch (error) {
    console.error('Error in loginUser', error.message)
    throw error
  }
}

module.exports.getUserProfile = async (userId) => {
  try {
    const user = await User.findById(userId).select('-password')
    if (!user) throw new Error('User not found')
    return user.toObject()
  } catch (error) {
    console.error('Error in getUserProfile', error.message)
    throw error
  }
}

module.exports.updateUserProfile = async (userId, data) => {
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { firstName: data.firstName, lastName: data.lastName, userName: data.userName },
      { new: true }
    ).select('-password')
    if (!user) throw new Error('User not found')
    return user.toObject()
  } catch (error) {
    console.error('Error in updateUserProfile', error.message)
    throw error
  }
}