import React from 'react';
import pepper from '../images/pepper.svg';

const SpiceLevel = (props) => {

  const renderSpiceLevel = (level) => {
    const result = []
    for (let i = 0; i < level; i++) {
      result.push(i)
    }
    return result
  }

  const content = renderSpiceLevel(props.level).length
  ?
  renderSpiceLevel(props.level).map((item) => {
    return (
      <li key={item} className="spice-level__item">
        <img className="spice-level__image" src={pepper} alt="check inactive" />
      </li>
    )
  })
  :
    null

  return (
    <ul className="spice-level">
      {content}
    </ul>
  )
};

export default SpiceLevel;