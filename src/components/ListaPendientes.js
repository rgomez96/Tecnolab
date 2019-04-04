
import React, { Component } from 'react';
import './Lista.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
const JsonTable = require('ts-react-json-table');

var _ = require('lodash');
var filter = require('lodash.filter');


class ListaPendientes extends Component {
  constructor() {
    super();
    this.state = {
      datatabla: [],
      id:"s"
    };
  }

  componentDidMount() {
    fetch('/peticiones')
      .then(peticiones => peticiones.json())
      .then(datatabla => {
       datatabla=_.filter(datatabla,{'Especialidad':"Traumatología"})
       this.setState({ datatabla })
      });
  }


  render() {
    var a="aja";
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
      {key :'Acciones', label: 'Acciones', cell:function(){
        return (
          <Button variant="success"><Link to={`/../validquir" + ${this.a}`}>Validar Postquirúrgico</Link></Button>
        );
      } }
    ];

    return (
      <div>
        <p className="listado">Listado de solicitudes pendientes de actuación.</p>
        <JsonTable rows={this.state.datatabla} columns={columns}/>
      </div>
    );
  }
}

export default ListaPendientes;