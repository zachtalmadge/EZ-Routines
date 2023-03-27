import React, { useState } from 'react'
import { useInput } from '../../hooks/hooks'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const AddExerciseForm = () => {

    // states for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    // states for form inputs
    const [nameProp, resetName] = useInput('')
    const [groupProp, resetGroup] = useInput('back')
    const [setsProp, resetSets] = useInput('')
    const [repsProp, resetReps] = useInput('')

    async function submit (e) {
        e.preventDefault()
        let data = {
            name: nameProp.value,
            group: groupProp.value,
            sets: setsProp.value,
            reps: repsProp.value
        }
        let body = JSON.stringify(data)
        let headers = {'content-type': 'application/json'}

        let response = await fetch('http://localhost:3000/exercise', {method: "POST", headers, body})
        if (response.status === 200) {
            handleShow()
            resetGroup()
            resetName()
            resetReps()
            resetSets()
        }
        else {
            alert('Whoops! Looks like something went wrong')
        }
    
    }

    return(
        <>
        <Form onSubmit={e => submit(e)}>
            <Form.Group className="my-3">
                <Form.Label>Exercise Name</Form.Label>
                <Form.Control {...nameProp} type="text" placeholder="Enter Exercise Name" />
            </Form.Group>

            <Form.Group className="my-3">
                <Form.Label>Muscle Group</Form.Label>
                <Form.Control {...groupProp} as="select" className="my-1 mr-sm-2">
                    <option value="back">Back</option>
                    <option value="chest">Chest</option>
                    <option value="legs">Legs</option>
                    <option value="shldr">Shoulders</option>
                    <option value="arms">Arms</option>
                </Form.Control>
            </Form.Group>
            <Row>
                <Col lg={6}>
                    <Form.Group className="my-3">
                        <Form.Label>Sets</Form.Label>
                        <Form.Control {...setsProp} type="number" min={1} max={20} placeholder="Enter # of Sets" />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="my-3">
                        <Form.Label>Reps</Form.Label>
                        <Form.Control {...repsProp} type="number"  min={1} max={30} placeholder="Enter # of Reps" />
                    </Form.Group>
                </Col>
            </Row>
            <button className="ui button red huge" type="submit">Submit</button>         
        </Form>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You have successfully added an exercise to our database.</Modal.Body>
            <Modal.Footer>
                <button className="ui button" onClick={handleClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
       </>
    )
}

export default AddExerciseForm