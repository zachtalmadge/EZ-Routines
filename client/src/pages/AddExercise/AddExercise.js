import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import AddExerciseForm from '../../components/AddExerciseForm'

const AddExercise = () => {

    return(
        <Container>
            <Row className="my-5">
                <h1 className="display-1 text-center">Add Exercise</h1>
                <p class="mb-5 lead text-center">
                    Fill out the form below to add an exercise to our database.
                </p>
                <AddExerciseForm/>
            </Row>
        </Container>
    )

}

export default AddExercise