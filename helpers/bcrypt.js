const bcrypt = require('bcryptjs')


const generateHashPassword = (password) => {
  const salt = bcrypt.genSaltSync(15)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

const verifyPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

modules.export = {generateHashPassword, verifyPassword}