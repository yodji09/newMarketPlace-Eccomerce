const {verifyToken} = require('./helpers/jwt.js')

class AuthoAuthen {
  static Authorization (req, res, next) {

  }

  static Authentication (req, res, next) {
    const {token} = req.headers
    try {
      const decode = verifyToken(token)
      const {id} = decode
    } catch (error) {

    }
  }
}