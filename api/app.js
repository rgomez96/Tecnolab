var express      = require('express'),
    passport     = require('passport'),
    bodyParser   = require('body-parser'),
    LdapStrategy = require('passport-ldapauth');
    testAPIRouter = require("./routes/testAPI");
    pendiente = require("./routes/pendiente");
    app = express();

var OPTS = {
  server: {
    url: 'ldap://localhost:389',
    bindDN:'cn=Admin',
    bindCredentials:'Password',
    searchBase: 'dc=example,dc=com',
    searchFilter:'(cn={{username}})'
  }
};

app.use("/testAPI", testAPIRouter);
app.use("/peticiones",pendiente);

passport.use(new LdapStrategy(OPTS));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());

passport.serializeUser(function(user, done) {
  done(null, user.username);
});         
passport.deserializeUser(function(user, done) {
  done(null, user);
});

/*app.post('/login', passport.authenticate('ldapauth', {session: false}), function(req, res) {
  res.send({status: 'ok'});
});*/

app.post('/login', passport.authenticate('ldapauth', {successRedirect:'/ilustraciones', failureRedirect: '/login' }));

app.listen(9000);
console.log ("App listening");

module.exports = app;
