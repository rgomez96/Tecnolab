
import React, { Component } from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button'
//import { Link } from 'react-router-dom';

const JsonTable = require('ts-react-json-table');

var _ = require('lodash');
var filter = require('lodash.filter');

class ListaPendientes extends Component {
  constructor() {
    super();
    this.state = {
      datatabla: []
    };
  }

  componentDidMount() {
    fetch('/peticiones')
      .then(peticiones => peticiones.json())
      .then(datatabla => {
        //datatabla=_.filter(datatabla,{'Especialidad':"Traumatología"})
        this.setState({ datatabla })
      });
  }

  render() {
    var columns = [
      'Número Solicitud',
      'Procedimiento',
      'Especialidad',
      'Centro',
      'Nusha',
      'nombre',
      'apellidos',
      'Fecha Solicitud',
      'Fecha Entrega Ideal',
      'Fecha Intervención',
      'Fecha Planificada Impresión',
      'Estado',
      {
        key: 'Acciones', label: 'Acciones', cell: function () {
          return (
            <Button variant="success">Validar Postquirúrgico</Button>
          );
        }
      }
    ];

    return (
      <div>
        <p className="listado">Listado de solicitudes pendientes de actuación.</p>
        <JsonTable rows={this.state.datatabla} columns={columns} />
      </div>
    );
  }
}

export default ListaPendientes;