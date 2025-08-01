const LocalStrategy = require("passport-local").Strategy
module.exports = new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
},  async(username, password, done)=> {
    
})