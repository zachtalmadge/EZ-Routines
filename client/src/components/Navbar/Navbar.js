import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => (

    <nav className="container-fluid sticky-top" style={{backgroundColor: "rgb(25, 26, 27)"}}>
        <div className="navbar navbar-dark navbar-expand-md ui inverted menu py-0">
            <div className="container">
                <Link to="/" className="item header py-3">E-Z Routines <i className="icon check circle red pl-1"></i></Link>
                <button 
                    className="navbar-toggler" 
                    type="button"
                    data-toggle="collapse" 
                    data-target="#TogglerNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="TogglerNav">
                    <div className="navbar-nav ml-auto ">
                        <Link to="/exercises" style={{cursor:"default"}}>
                            <button className="ui red button right labeled icon mx-2 my-2"><i className="mail forward icon"></i>View Exercises</button>
                        </Link>
                        <Link to="/myRoutine" style={{cursor:"default"}}>
                            <button className="ui red right labeled icon button mx-2 my-2"><i className="ul list icon"></i>My Routine</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar