import React from 'react';
import './../App.css';

const JsonTable = require('ts-react-json-table');

class Encurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datatabla: []
        };
    }

    render() {
        return (
            <div>
                <p className="listado">Listado de actividades en curso.</p>
                <JsonTable rows={this.state.datatabla} />
            </div>
        );
    }
}

export default Encurso;
