import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
    <footer className="ui inverted vertical footer segment">
        <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                    <h4 className="ui inverted header">Learn More</h4>
                    <div className="ui inverted link list">
                        <a href="https://wikipedia.tlm.cloud/wikipedia_en_computer_2017-04/A/Physical_exercise.html" className="item">Physical Exercise</a>
                        <a href="https://wikipedia.tlm.cloud/wikipedia_en_computer_2017-04/A/Bodybuilding.html" className="item">Bodybuilding</a>
                    </div>
                </div>
                <div className="three wide column">
                    <h4 className="ui inverted header">Sitemap</h4>
                    <div className="ui inverted link list">
                        <Link to="/" className="item d-block">Home</Link>
                        <Link to="/exercises" className="item d-block">View Exercises</Link>
                        <Link to="/myWorkout" className="item d-block">My Workout</Link>
                    </div>
                </div>
                <div className="seven wide column">
                    <h4 className="ui inverted header">&copy; Zachary Talmadge 2023</h4>
                    <p>Thank you to The Last Mile for teaching me the MERN stack!</p>
                    <div className="ui inverted link list">
                        <a href="#" className="item">Back to Top</a>
                    </div>
                </div>
            </div>
        </div>
  </footer>
)
export default Footer