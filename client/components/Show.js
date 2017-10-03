import React from 'react'

const Show = (props) => {
    return (
      <div className="event">
        <div className="date">
          <ul>
            <li className="weekDay">{props.event.weekday.substring(0, 3).toUpperCase()}</li>
            <li className="monthDate">{props.event.month.substring(0, 3).toUpperCase()}. {props.event.day}</li>
            <li className="year">{props.event.year}</li>
          </ul>
        </div>
        <div className="event-details">
          <ul>
            <li className="eventPlace">{props.event.place.toUpperCase()}</li>
            <li className="time">{props.event.time}</li>
            <li className="address"><a style={{"fontWeight": "500"}} href={props.link}>{props.event.address.toLowerCase()}</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Show
