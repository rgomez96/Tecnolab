var express      = require('express'),
    passport     = require('passport'),
    bodyParser   = require('body-parser'),
    LdapStrategy = require('passport-ldapauth');
    testAPIRouter = require("./routes/testAPI");
    peticionesPendientes = require("./routes/pendiente")
 
// Credentials from the free LDAP test server by forumsys
// More info at: http://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/
var OPTS = {
  /*server: {
    url: 'ldap://ldap.forumsys.com:389',
    bindDn: 'cn=read-only-admin,dc=example,dc=com',
    bindCredentials: 'password',
    searchBase: 'dc=example,dc=com',
    searchFilter: '(uid={{username}})'
  }*/
  server: {
    url: 'ldap://localhost:1389',
    bindDN:'cn=Directory Manager,dc=example,dc=com',
    bindCredentials:'Password',
    searchBase: 'dc=example,dc=com',
    searchFilter:'(cn={{username}}'
  }
};
 
var app = express();
 
passport.use(new LdapStrategy(OPTS));
 
app.use("/testAPI", testAPIRouter);
app.use("/pendiente", peticionesPendientes);
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
  console.log("enviando" + res);
  res.send({status: 'ok'});
});

app.listen(9000);
console.log ("App listening")

module.exports = app;
