
import React, { Component } from 'react';
import DynamicForm from './DynamicForm';
import Table from 'react-bootstrap/Table'
import './ListaPendientes.css'

class ListaPendientes extends Component {
  state = {
    data: [
      { Numero: 24, Procedimiento: "Quimio", Especialidad: "dfa", Centro: "fds", Nusha: "fdaf", nombre: "paciente", apellidos:"pacientoso", Fechasol: "22/11/2019", FechaEnt: "28/11/2019", FechaInt: "30/11/2019", FechaImp: "28/11/2019", Estado: "bien", Acciones: "no" },
      { Numero: 25, Procedimiento: "Quimio", Especialidad: "dfa", Centro: "fds", Nusha: "fdaf", nombre: "paciente", Fechasol: "22/11/2019", FechaEnt: "28/11/2019", FechaInt: "30/11/2019", FechaImp: "28/11/2019", Estado: "bien", Acciones: "no" }
    ]
  }



  render() {
    var datatabla = [
      { Numero: 24, Procedimiento: "Quimio", Especialidad: "dfa", Centro: "fds", Nusha: "fdaf", nombre: "paciente", apellidos:"pacientoso", Fechasol: "22/11/2019", FechaEnt: "28/11/2019", FechaInt: "30/11/2019", FechaImp: "28/11/2019", Estado: "bien", Acciones: "no" },
      { Numero: 25, Procedimiento: "Quimio", Especialidad: "dfa", Centro: "fds", Nusha: "fdaf", nombre: "paciente", Fechasol: "22/11/2019", FechaEnt: "28/11/2019", FechaInt: "30/11/2019", FechaImp: "28/11/2019", Estado: "bien", Acciones: "no" }
    ]
    function renderData() {
      return (
        <tr key={this.state.data.Numero}>
          <td>{this.state.data.Numero}</td>
          <td>{this.state.data.Procedimiento}</td>
          <td>{this.state.data.Especialidad}</td>
          <td>{this.state.data.Centro} </td>
          <td>{this.state.data.Nusha} </td>
          <td>{this.state.data.nombre} </td>
          <td>{this.state.data.apellidos} </td>
          <td>{this.state.data.Fechasol} </td>
          <td>{this.state.data.FechaEnt} </td>
          <td>{this.state.data.FechaInt} </td>
          <td>{this.state.data.FechaImp} </td>
          <td>{this.state.data.Estado} </td>
          <td>{this.state.data.Acciones} </td>
        </tr>
      )
    }


    return (
      <div className="Tabla">
        <h1>Hola soy listapendientes </h1>
        <Table variant="primary" bordered>
          <thead>
            <tr>
              <th>Número Solicitud</th>
              <th>Procedimiento </th>
              <th>Especialidad </th>
              <th>Centro </th>
              <th>Nusha </th>
              <th>Nombre </th>
              <th>Apellidos </th>
              <th>Fecha Solicitud </th>
              <th>Fecha Entrega Ideal </th>
              <th>Fecha Intervención</th>
              <th>Fecha Planificada Impresión</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datatabla.map(this.renderData)}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default ListaPendientes;