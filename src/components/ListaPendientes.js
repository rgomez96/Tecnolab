
import React, { Component } from 'react';
import './Lista.css'
import Button from 'react-bootstrap/Button'
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
       datatabla=_.filter(datatabla,{'Especialidad':"Traumatología"})
       this.setState({ datatabla })
      });
  }

  render() {
    return (
      <div>
        <p>Listado de solicitudes pendientes de actuación.</p>
        <JsonTable rows={this.state.datatabla} />
      </div>
    );
  }
}

export default ListaPendientes;