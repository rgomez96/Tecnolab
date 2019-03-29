import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './NuevaSol.css'

export default class NuevaSol extends Component {
    constructor(props) {
        super(props);
        this.state = { size: 3 }
    }
    render() {
        return (
            <div>
                <div className="containerSolicitud">
                    <Form>
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
                            <Form.Control name="fechaestudio" type="date" bsPrefix="formizquierda" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Especialidad</Form.Label>
                            <Form.Control name="especialidad" as="select" bsPrefix="formizquierda" >
                                <option>Traumatología</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Centro</Form.Label>
                            <Form.Control name="centro" as="select" bsPrefix="formizquierda">
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
                            <Form.Control name="fechaintervencion" type="date" bsPrefix="formizquierda"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Fecha ideal de entrega</Form.Label>

                            <Form.Control name="fechaentrega" type="date" bsPrefix="formizquierda" />

                        </Form.Group>
                    </Form>
                </div>
                <div className="botones">
                    <Button variant="primary" type="submit" > Solicitar </Button>
                    <Button variant="danger" type="submit" > Cancelar </Button>
                </div>
            </div>
        )
    }
}