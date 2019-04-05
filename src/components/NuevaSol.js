import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './../App.css';

export default class NuevaSol extends Component {
    constructor(props) {
        super(props);
        this.state = { size: 3 }
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch(this.props.formAction, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description: this.state.description})
        });
    }

    render() {
        return (
            <div>
                <div className="containerSolicitud">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Nusha del Paciente</Form.Label>
                            <Form.Control name="nusha" type="text" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Nombre del Paciente</Form.Label>
                            <Form.Control name="nombre" type="text" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Apellidos del Paciente</Form.Label>
                            <Form.Control name="apellidos" type="text" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Tipo de Estudio</Form.Label>
                            <Form.Control name="tipo" as="select" >
                                <option>----------------</option>
                                <option>CT</option>
                                <option>PET-TC</option>
                                <option>RM</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Fecha de estudio</Form.Label>
                            <Form.Control name="fechaestudio" type="date" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Especialidad</Form.Label>
                            <Form.Control name="especialidad" as="select" >
                                <option>Traumatología</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Centro</Form.Label>
                            <Form.Control name="centro" as="select">
                                <option>HUJ (HU de Jaén)</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Procedimiento</Form.Label>
                            <Form.Control name="procedimiento" as="select">
                                <option>----------------</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Localización</Form.Label>
                            <Form.Control name="localizacion" as="select">
                                <option>----------------</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Observaciones</Form.Label>
                            <Form.Control name="observaciones" type="text" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Fecha intervención</Form.Label>
                            <Form.Control name="fechaintervencion" type="date" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Fecha ideal de entrega</Form.Label>

                            <Form.Control name="fechaentrega" type="date" />

                        </Form.Group>
                        <div className="botones">
                            <Button variant="primary" type="submit"> Solicitar </Button>
                            <Button variant="danger" type="submit" > Cancelar </Button>
                        </div>
                    </Form>
                </div>

            </div>
        )
    }
}