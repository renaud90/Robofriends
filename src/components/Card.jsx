import React from 'react'
import './CardList.css'

const Card = ({ id, name, email }) => {
    return (
        <div className="cardWrapper">
            <img src={"https://robohash.org/" + id + "?200X200"} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card