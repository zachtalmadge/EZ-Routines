import React, { useState } from 'react'
import { useFetch } from '../../hooks/hooks'
import TableHead from '../../components/TableHead'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import RoutineRow from '../../components/RoutineRow'
import Modal from 'react-bootstrap/Modal'

const MyRoutine= () => {

    // states for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const { data, loading, error, setData} = useFetch('http://localhost:3000/routine')

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Whoops! Looks like something went wrong</h1>

    async function removeFromRoutine(e) {
        let response = await fetch(`http://localhost:3000/routine/${e}`, {method: "DELETE"})
        if (response.status === 200) {
            let newData = data.filter(({exercise_id}) => exercise_id !== e )
            setData(newData)
        }
        else {
            handleShow()
        }
    }

    return(
        <>
        <Container className="my-5">
            <Row className="text-center my-5">
                <h1 className="display-1">My Routine</h1>
                <hr/>
                {data.length ? '' : <p>Looks like you don't have exercises in your routine. Go to "View Exercises" to get started!</p>}
            </Row>
            <Row>
                <table className="ui inverted right aligned table">
                    <TableHead/>
                    <tbody>
                        {data.map((exercise, i) => <RoutineRow {...exercise} key={i} deleteRow={removeFromRoutine}/>)}
                    </tbody>
                </table>
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Whoops!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Looks like something went wrong:(</Modal.Body>
            <Modal.Footer>
                <button className="ui button" onClick={handleClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
       </>
    )

}

export default MyRoutine