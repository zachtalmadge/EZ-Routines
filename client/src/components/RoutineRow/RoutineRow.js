import React from 'react'

const RoutineRow = ({exercise_id, exercise_name, sets, reps, deleteRow = f => f}) => {

    return (
        <tr>
            <td className="left aligned">{exercise_name}</td>
            <td>{sets}</td>
            <td>{reps}</td>
            <td><button onClick={() => deleteRow(exercise_id)} className="ui button right labeled icon red"><i className="icon trash"></i>Remove</button></td>
        </tr>
    )
}

export default RoutineRow