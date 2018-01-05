import React from 'react'

const Show = ({ event, link }) => {
    return (
      <div className="event">
        <div className="date">
          <ul>
            <li className="weekDay">{event.weekday.substring(0, 3).toUpperCase()}</li>
            <li className="monthDate">{event.month.substring(0, 3).toUpperCase()}. {event.day}</li>
            <li className="year">{event.year}</li>
          </ul>
        </div>
        <div className="event-details">
          <ul>
            <li className="eventPlace">{event.place.toUpperCase()}</li>
            <li className="time">{event.time}</li>
            <li className="address"><a href={link}>{event.address.toLowerCase()}</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Show
