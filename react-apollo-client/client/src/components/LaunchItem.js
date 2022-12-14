import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const LaunchItem = ({ launch:{ flight_number, mission_name, launch_date_local, launch_success } }) => {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission: {mission_name}</h4>
                    <p>Date: <Moment format="dddd, MMMM Do YYYY, h:mm a">{launch_date_local}</Moment></p>
                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${flight_number}`} className='btn btn-secondary'>Launch Details</Link>
                </div>
            </div>
        </div>
    )
}

export default LaunchItem