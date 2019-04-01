var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    res.json([
        {
            "Número Solicitud": 24, Procedimiento: "Quimio", Especialidad: "dfa", Centro: "fds", Nusha: "fdaf",
            nombre: "paciente", apellidos: "pacientoso", "Fecha Solicitud": "22/11/2019",
            "Fecha Entrega Ideal": "28/11/2019", "Fecha Intervención": "30/11/2019",
            "Fecha Planificada Impresión": "28/11/2019", Estado: "bien", Acciones: "no"
        },
        {
            "Número Solicitud": 25, Procedimiento: "Quimio", Especialidad: "dfa", Centro: "fds", Nusha: "fdaf",
            nombre: "paciente", apellidos: "pacientoso", "Fecha Solicitud": "22/11/2019",
            "Fecha Entrega Ideal": "28/11/2019", "Fecha Intervención": "30/11/2019",
            "Fecha Planificada Impresión": "28/11/2019", Estado: "bien", Acciones: "no"
        },
        {
            "Número Solicitud": 26, Procedimiento: "Quimio", Especialidad: "dfa", Centro: "fds", Nusha: "fdaf",
            nombre: "paciente", apellidos: "pacientoso", "Fecha Solicitud": "22/11/2019",
            "Fecha Entrega Ideal": "28/11/2019", "Fecha Intervención": "30/11/2019",
            "Fecha Planificada Impresión": "28/11/2019", Estado: "bien", Acciones: "no"
        },
    ]);
});

module.exports = router;
