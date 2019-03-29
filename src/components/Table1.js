import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

function renderPerson(person, index) {
    return (
      <tr key={index}>
        <td>{person.name}</td>
        <td>{person.address}</td>
        <td>{person.age}</td>
      </tr>
    )
  }

class Table1 extends Component {
    render() {
        return (
            <div>
                <Table striped condensed hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personArray.map(this.renderPerson)}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Table1;