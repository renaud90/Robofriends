import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({ robots }) => {
    const cardComponent = robots.map((robot, i) => <Card key={i} id={i} name={robot.name} email={robot.email} />)
    return (
        <div className="cardListWrapper">
            {cardComponent}
        </div>
    )
}

export default CardList