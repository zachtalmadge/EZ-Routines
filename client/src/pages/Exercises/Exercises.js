import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/hooks'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TableHead from '../../components/TableHead'
import ExerciseRow from '../../components/ExerciseRow'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const Exercises = () => {

    const { data, loading, error } = useFetch('http://localhost:3000/exerciseRows')
    if (loading) return <h1>Loading....</h1>
    if (error) return <h1>There has been an error...</h1>

    return(
        <Container className="my-5">
            <Row className="text-center">
                <h1 className="display-1">Exercises</h1>
                <div class="ui segment secondary mb-5 lead">
                    Please find our featured exercises below. We made sure to include the staples for each muscle group. If you don't see an exercise you want, please feel free to add one to our database.
                    <Link to="/addExercise" className="ui button red right labeled icon mt-3"><i className="icon add"></i>Add Exercise</Link>
                </div>
            </Row>
            <Row>
                <Tabs defaultActiveKey="back">
                    <Tab eventKey="back" title="Back">
                        <table className="ui inverted right aligned mt-5 table">
                            <TableHead/>
                            <tbody>
                                {data.map((exercise, i) => {
                                    if (exercise.muscle_group === 'back') {
                                        return <ExerciseRow key={i} {...exercise} />
                                    }
                                })}
                            </tbody>
                        </table>
                    </Tab>
                    <Tab eventKey="chest" title="Chest">
                        <table className="ui inverted right aligned mt-5 table">
                            <TableHead/>
                            <tbody>
                                {data.map((exercise, i) => {
                                    if (exercise.muscle_group === 'chest') {
                                        return <ExerciseRow key={i} {...exercise} />
                                    }
                                })}
                            </tbody>
                        </table>
                    </Tab>
                    <Tab eventKey="legs" title="Legs">
                        <table className="ui inverted right aligned mt-5 table">
                            <TableHead/>
                            <tbody>
                                {data.map((exercise, i) => {
                                    if (exercise.muscle_group === 'legs') {
                                        return <ExerciseRow key={i} {...exercise} />
                                    }
                                })}
                            </tbody>
                        </table>
                    </Tab>
                    <Tab eventKey="shoulders" title="Shoulders">
                        <table className="ui inverted right aligned mt-5 table">
                            <TableHead/>
                            <tbody>
                            {data.map((exercise, i) => {
                                if (exercise.muscle_group === 'shldr') {
                                    return <ExerciseRow key={i} {...exercise} />
                                }
                            })}
                            </tbody>
                        </table>
                    </Tab>
                    <Tab eventKey="arms" title="Arms">
                        <table className="ui inverted right aligned mt-5 table">
                            <TableHead/>
                            <tbody>
                                {data.map((exercise, i) => {
                                    if (exercise.muscle_group === 'arms') {
                                        return <ExerciseRow key={i} {...exercise} />
                                    }
                                })}
                            </tbody>
                        </table> 
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    )

}

export default Exercises