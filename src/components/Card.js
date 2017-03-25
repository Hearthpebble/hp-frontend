import React, { PropTypes } from 'react';
import './Card.css'

const Card = ({cost, title, health, attack, desc, type, visible}) => {
  if(!visible) {
    return (
      <div className="Card">
        <div className="Card-Back"></div>
      </div>
    )
  }
  return (
    <div className="Card">
      <div className="Card-Cost token">{ cost }</div>
      <div className="Card-Title Card-Text">{ title }</div>
      { health && <div className="Card-Health token">{ health }</div> }
      { attack && <div className="Card-Attack token">{ attack }</div> }
      <div className="Card-Desc Card-Text">{ desc }</div>
      { type &&<div className="Card-Type Card-Text">{ type }</div> }
    </div>
  )
}

Card.propTypes = {
  cost: PropTypes.number,
  title: PropTypes.string,
  health: PropTypes.number,
  attack: PropTypes.number,
  desc: PropTypes.string,
  type: PropTypes.string,
  visible: PropTypes.bool,
}

Card.defaultProps = {
  visible: false,
}

export default Card