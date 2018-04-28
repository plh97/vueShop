'use strict'
module.exports = {
  NODE_ENV: '"production"'
}


db.createUser(
  {
    user: "pengliheng",
    pwd: "ewqewq",
    roles: [ { role: "readWrite", db: "test" } ]
  }
)