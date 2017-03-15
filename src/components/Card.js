import React, { PropTypes } from 'react';
import './Card.css'

const Card = ({cost, title, health, attack, desc, type}) => (
  <div className="Card">
    <div className="Card-Cost token">{ cost }</div>
    <div className="Card-Title text">{ title }</div>
    { health && <div className="Card-Health token">{ health }</div> }
    { attack && <div className="Card-Attack token">{ attack }</div> }
    <div className="Card-Desc text">{ desc }</div>
    { type &&<div className="Card-Type text">{ type }</div> }
  </div>
)

Card.propTypes = {
  cost: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  health: PropTypes.number,
  attack: PropTypes.number,
  desc: PropTypes.string,
  type: PropTypes.string,
}

export default Card