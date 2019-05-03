var express = require("express"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  LdapStrategy = require("passport-ldapauth"),
  testAPIRouter = require("./routes/testAPI"),
  app = express();

/* testAPI sólo sirve para testear que express está funcionando. */
app.use("/testAPI", testAPIRouter);

/* Atributos relativos al servidor LDAP, necesarios para realizar la conexión */
var OPTS = {
  server: {
    url: "ldap://localhost:389",
    bindDN: "cn=Admin",
    bindCredentials: "Password",
    searchBase: "dc=example,dc=com",
    searchFilter: "(cn={{username}})"
  }
};

/* Variables que almacenarán la información del usuario */
var loggedIn = false;
var usuario, nombre, apellidos, telefono, correo, fax;

/* Necesarios para que Passport funcione correctamente. La conexión LDAP necesita bodyParser */
passport.use(new LdapStrategy(OPTS));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

/* Comprueba que no haya un usuario ya conectado. Si no hay un usuario conectado y el usuario introducido
   existe, entonces copia en las variables los datos que recibe del usuario para enviarlos mas tarde.
   Si no encuentra el usuario recarga la página. */
app.post("/login", function(req, res, next) {
  passport.authenticate("ldapauth", function(err, user) {
    if (err) {
      return next(err); //Genera un error 500
    }
    if (!user) {
      return res.redirect("/login");
    }
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
  loggedIn = false;
  usuario = "";
  nombre = "";
  apellidos = "";
  telefono = "";
  correo = "";
  fax = "";
  /*res.json({
    usuario: usuario,
    nombre: nombre,
    apellidos: apellidos,
    telefono: telefono,
    correo: correo,
    fax: fax,
    loggedIn: loggedIn
  });*/
  console.log("Redirigiendo");
  return res.render("/");
  console.log("Redirigido");
});

/* Devuelve los datos almacenarios del usuario que está conectado en formato JSON
   (solicitados por Barra y por Profile). */
app.get("/datosusuario", function(req, res) {
  res.json({
    usuario: usuario,
    nombre: nombre,
    apellidos: apellidos,
    telefono: telefono,
    correo: correo,
    fax: fax,
    loggedIn: loggedIn
  });
});

app.set("port", 9000);
app.listen(app.get("port"));
console.log("App listening on port " + app.get("port"));

module.exports = app;
