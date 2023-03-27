import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Home.css'

const Home = () => (
    <>
    <section className="jumbotron jumbotron-fluid text-center text-white d-flex flex-column justify-content-center">
        <Container className="mb-5 pb-5">
            <div>
                <h1 className="display-1">E-Z Routines</h1>
                <p className="lead">Your next workout, simplified. <i className="icon check circle"></i></p>
                <Link to="/exercises" className="ui button red huge">Get Started</Link>
            </div>
        </Container>
    </section>
    <main>
        <Container>
            <Row className="mt-5 py-4">
                <Col lg={6}>
                    <img src="./images/gloves_and_dumbbells.jpeg" className="img-fluid h-75 rounded shadow"/>
                </Col>
                <Col lg={6}>
                    <h2>Planning your next workout <br/>has never been <i>easier</i>.</h2>
                    <p className="lead">E-Z Routines takes all the guess work out of your next workout by allowing you to choose from a wide variety exercises to add to your planner. We offer everything from the bread-and-butter exercises to the hot-and-trendy. You can even contribute to our database by submitting new exercises!</p>
                    <Link to="/myRoutine" className="ui button red huge right labeled aligned icon mt-4"><i className="right arrow icon"></i>View My Routine</Link>
                </Col>
             </Row>
        </Container>
        <Container fluid className="bg-dark text-white py-5 text-left">
            <Container>
                <Row>
                    <Col lg={6} className="mb-5">
                        <div className="ui statistics d-flex flex-column">
                            <div className="statistic w-100 my-4">
                                <div className="value text-light">
                                    <i className="fa fa-running mr-2 text-danger"></i>
                                </div>
                                <div className="label text-light">
                                    5 Major Muscle Groups To Choose From
                                </div>
                            </div>
                            <div className="statistic w-100 my-4">
                                <div className="value text-light">
                                    <i className="fa fa-dumbbell mr-2 text-danger"></i>
                                </div>
                                <div className="label text-light">
                                60+ Exercises Available
                                </div>
                            </div>
                            <div className="statistic w-100 my-4">
                                <div className="value text-light">
                                    <i className="trophy icon mr-2 text-danger"></i>
                                </div>
                                <div className="label text-light">
                                1 Awesome Workout App
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="text-center d-flex flex-column justify-content-center">
                        <h3>"I LOVE using this for my clients and myself!"</h3>
                        <p className="pb-5"><i className="user icon circle"></i> - <b>Maya</b> | Personal Trainer</p>

                        <hr/>

                        <h3 className="pt-5">"Where has this been my entire life?"</h3>
                        <p><i className="user icon circle"></i> - <b>@Steve_Smalls_Fit</b> | Fitness Influencer</p>
                    </Col>
                </Row>
            </Container>    
        </Container>
        <Container>
            <Row className="text-center mt-5 mb-5 pt-5 text-danger">
                <Col>
                    <h2 className="display-2"><b>Featured Exercises</b></h2>
                </Col>
            </Row>
            <Row className="mb-5 pb-5">
                <Col lg={4}>
                    <img className="img-fluid rounded shadow mb-3" src="./images/benchpress.jpeg" />
                    <div className="my-3">
                        <h5 className="display-6">Bench Press</h5>
                        <p className="lead">Considered 1 of 3 powerlifts, the Bench Press is one of the most important exericises that should be included in every upper-body routine. The bench press hits the chest, front delts and triceps and is a great measure of total strength.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <img className="img-fluid rounded shadow mb-3" src="./images/deadlift3.jpeg" />
                    <div className="my-3">
                        <h5 className="display-6">Deadlifts</h5>
                        <p className="lead">Deadlifts are the undisputed king of exercises. Deadlifts hit every muscle in your body, primarily targeting your back and hamstrings. Done well, the Deadlift will increase your overall total strength.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <img className="img-fluid rounded shadow mb-3" src="./images/pullup.jpeg" />
                    <div className="my-3">
                        <h5 className="display-6">Pullups</h5>
                        <p className="lead">No back routine is considered complete without a form of pullups. These could be done in a variety of ways included palms facing away, toward, or neutral. Pullups work your entire back and are required to build those 'wings' in your latissamus dorsi.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </main>
    </>
)

export default Home