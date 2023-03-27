import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Exercises from '../pages/Exercises'
import MyRoutine from '../pages/MyRoutine'
import Error404 from '../pages/Error404'
import AddExercise from '../pages/AddExercise'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/exercises">
                <Exercises/>
            </Route>
            
            <Route path="/myRoutine">
                <MyRoutine/>
            </Route>

            <Route path="/addExercise">
                <AddExercise/>
            </Route>

            <Route path="*">
                <Error404/>
            </Route>
        </Switch>
        <Footer/>
    </Router>
)

export default App
