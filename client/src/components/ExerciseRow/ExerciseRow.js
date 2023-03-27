import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'

const ExerciseRow = ({id, exercise_name, sets, reps}) => {

    // states for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
  

    const addToRoutine = async e => {
        let response = await fetch(`http://localhost:3000/exercise/${e.target.dataset.id}`, {method: "PUT"})
        
        if (response.status === 200) {
            handleShow()
        }
        else { 
            alert('whoops! looks like something went wrong.')
        }
        
    }
    return (
        <>
        <tr>
            <td className="left aligned">{exercise_name}</td>
            <td>{sets}</td>
            <td>{reps}</td>
            <td><button data-id={id} onClick={e => addToRoutine(e)} className="ui button red right labeled icon"><i className="icon add"></i>Add To Routine</button></td>
        </tr>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Exercise Added!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{exercise_name} has been added to your routine.</Modal.Body>
            <Modal.Footer>
                <Link to="/myRoutine">
                    <button className="ui button red" onClick={handleClose}>
                        View My Routine
                    </button>
                </Link>
                    <button className="ui button" onClick={handleClose}>
                        Close
                    </button>
            </Modal.Footer>
        </Modal>
       </>
    )

}

export default ExerciseRow