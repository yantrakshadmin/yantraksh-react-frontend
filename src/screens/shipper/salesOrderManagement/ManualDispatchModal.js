import React, { useState, useEffect, useCallback } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, FormGroup, Label, Input, Form } from 'reactstrap';

const ManualDispatchModal = ({ changeStatustoDispatched,modal,toggle }) => {

  const optionsData = {
    truck_type: [
        'Open',
        'Container',
        'Trailer',
    ],
    truck: [
        '14 TYRE 29 Ton',
        '14 TYRE 25 Ton',
        '14 TYRE 24 Ton',
        '12 TYRE 24 Ton',
        '12 TYRE 21 Ton',
        '12 TYRE 20 Ton',
        '10 TYRE 19 Ton',
        '10 TYRE 15 Ton',
        '10 TYRE 14 Ton',
        '22 Feet 9.7 Ton',
        '19 Feet 8 Ton',
        '18 Feet 8 Ton',
        '17 Feet 6 Ton',
        '14 Feet 4 Ton',
        '13 Feet 3.5 Ton',
        'Tempo 407 2.5 Ton',
        'Tempo 407 2 Ton',
        'Tempo 407 1.5 Ton',
    ],
  }

  const [form,setForm] = useState({
    truck_type: "",
    truck: "",
    no_of_trucks: "",
  })

  const handleInputChange = useCallback(
    event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value
        });
    },
    [form, setForm]
  )

  const renderOptions = useCallback(
      data => {
          return data.map(o => {
              return <option key={o} value={o}>{o}</option>;
          });
      },
      []
  )

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      toggle();
      changeStatustoDispatched();
    },[]
  )

  return (
      <Modal isOpen={modal} toggle={toggle}>
        <Form onSubmit={handleSubmit}>
        <ModalHeader toggle={toggle}>Manual Dispatch</ModalHeader>
        <ModalBody>
          
            <Row>
                <Col md={12}>
                    <FormGroup>
                        <Label htmlFor="truck_type">Truck Type</Label>
                        <Input type="select" id="truck_type"
                            name={"truck_type"}
                            value={form.truck_type}
                            onChange={handleInputChange}
                            required
                        >
                            <option value={""} defaultValue>Select Truck Type</option>
                            {renderOptions(optionsData.truck_type)}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <FormGroup>
                        <Label htmlFor="truck">Truck</Label>
                        <Input type="select" id="truck"
                            name={"truck"}
                            value={form.truck}
                            onChange={handleInputChange}
                            required
                        >
                            <option value={""} defaultValue>Select Truck</option>
                            {renderOptions(optionsData.truck)}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                  <FormGroup>
                      <Label htmlFor="no_of_trucks">No. of Trucks</Label>
                      <Input type="number" name="no_of_trucks" id="no_of_trucks" value={form.no_of_trucks}
                          onChange={handleInputChange} required />
                  </FormGroup>
                </Col>
            </Row>

          
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary">Dispatch</Button>{' '}
          <Button type="button" color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </Form>
      </Modal>
  );
}

export default ManualDispatchModal;