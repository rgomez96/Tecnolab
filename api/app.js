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

/*app.post('/login', function(req, res, next) {
  passport.authenticate('ldapauth', {session: false}, function(err, user, info) {
    console.log(err,user);
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.send({ success : false, message : 'authentication failed' });
    }
    return res.send({ success : true, message : 'authentication succeeded' });
  })(req, res, next);
});*/

app.post('/login', passport.authenticate('ldapauth', {session: false}), function(req, res) {
  res.send({status: 'ok'});
});

app.listen(9000);
console.log ("App listening");

module.exports = app;
