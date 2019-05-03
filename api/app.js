var express = require("express"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  LdapStrategy = require("passport-ldapauth");
session = require("express-session");
testAPIRouter = require("./routes/testAPI");
pendiente = require("./routes/pendiente");
app = express();

app.use("/testAPI", testAPIRouter); // testAPI sólo sirve para testear que express está funcionando.
//app.use("/peticiones",pendiente);

/* Atributos necesarios para la identificación con el server LDAP */
var OPTS = {
  server: {
    url: "ldap://localhost:389",
    bindDN: "cn=Admin",
    bindCredentials: "Password",
    searchBase: "dc=example,dc=com",
    searchFilter: "(cn={{username}})"
  }
};

var loggedIn = false;
var usuario,nombre,apellidos,telefono,correo,fax;

app.use(
  session({
    secret: "ldap secret",
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 2419200000 } /// maxAge in milliseconds
  })
);

/* Necesarios para que passport funcione correctamente. La conexión LDAP necesita el bodyparser */
passport.use(new LdapStrategy(OPTS));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

/* Serialize y deserialize user son necesarios para realizar el login */
passport.serializeUser(function(user, done) {
  done(null, user.cn);
});
passport.deserializeUser(function(user, done) {
  done(null, user.cn);
});

app.post("/login", function(req, res, next) {
  passport.authenticate("ldapauth", { session: true }, function(err, user) {
    if (loggedIn == true) {
      return res.send({ message: "Ya hay un usuario conectado" });
    }
    if (err) {
      return next(err); //Genera un error 500
    }
    if (!user) {
      //si no encuentra el usuario recarga la pagina
      return res.redirect("/login")
    }
    //Copia en variables los datos que recibe del usuario para enviarlas más tarde.
    loggedIn = true;
    usuario = user.cn;
    nombre = user.givenName;
    apellidos = user.sn;
    telefono = user.telephoneNumber;
    correo = user.mail;
    fax = user.facsimileTelephoneNumber;
    res.redirect("/");
  })(req, res, next);
});



/* Elimina los datos del usuario conectado y los devuelve a la barra en formato JSON. */
app.get("/logout", function(req, res) {
  loggedIn=false;
  usuario = "";
  nombre = "";
  apellidos = "";
  telefono = "";
  correo = "";
  fax = "";
  res.json({
    usuario:usuario,
    nombre:nombre,
    apellidos:apellidos,
    telefono:telefono,
    correo:correo,
    fax: fax,
    loggedIn: loggedIn
  });
});


/* Devuelve los datos almacenarios del usuario que está conectado en formato JSON
   (solicitados por Barra y por Profile). */
app.get("/datosusuario", function(req, res) {
  res.json({
    usuario:usuario,
    nombre:nombre,
    apellidos:apellidos,
    telefono:telefono,
    correo:correo,
    fax: fax,
    loggedIn: loggedIn
  });
});

app.set("port", 9000);
app.listen(app.get("port"));
console.log("App listening on port " + app.get("port"));

module.exports = app;
