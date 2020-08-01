const jwt = require('jsonwebtoken')

function generateToken(payload) {
  return jwt.sign(payload, process.env.SECRET)
}

function verifyToken(token) {
  return jwt.verify(payload, process.env.SECRET)
}

modules.export = {generateToken, verifyToken}