import React, { PropTypes } from 'react'
import Card from './Card'
import './Hand.css'

const Hand = ({ hand }) => (
  <div className="Hand">
    {hand.map(card =>
      <Card
        key={ card.id }
        cost={ card.cost }
        title={ card.title }
        health={ card.health } 
        attack={ card.attack } 
        desc={ card.desc } 
        type={ card.type } 
        visible={ card.visible }
      />
    )}
  </div>
)

Hand.propTypes = {
  hand: PropTypes.array.isRequired
}

export default Hand