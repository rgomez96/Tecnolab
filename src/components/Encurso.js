import React from 'react';
import './Lista.css'
import Button from 'react-bootstrap/Button'
const JsonTable = require('ts-react-json-table');


class Encurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datatabla: [
                {
                    "Número Solicitud": 24, Procedimiento: "Quimio", Especialidad: "dfa", Centro: "fds", Nusha: "fdaf",
                    nombre: "paciente", apellidos: "pacientoso", "Fecha Solicitud": "22/11/2019",
                    "Fecha Entrega Ideal": "28/11/2019", "Fecha Intervención": "30/11/2019",
                    "Fecha Planificada Impresión": "28/11/2019", Estado: "bien", Acciones: "no"
                },
                {
                    "Número Solicitud": 24, Procedimiento: "Quimio", Especialidad: "dfa", Centro: "fds", Nusha: "fdaf",
                    nombre: "paciente", apellidos: "pacientoso", "Fecha Solicitud": "22/11/2019",
                    "Fecha Entrega Ideal": "28/11/2019", "Fecha Intervención": "30/11/2019",
                    "Fecha Planificada Impresión": "28/11/2019", Estado: "bien", Acciones: "no"
                },
            ]
        };
    }

    render() {
        return (
            <div>
                <p>Listado de solicitudes en curso.</p>
                <JsonTable rows={this.state.datatabla} />
            </div>
        );
    }
}

export default Encurso;
