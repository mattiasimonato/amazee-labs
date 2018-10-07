import React from 'react';

const Allergies = (props) => {

  const content = props.allergies ?
    props.allergies.map((allergy, i) => {
      return <li key={i} className="allergies__item allergies__item--asterisk">{allergy}</li>
    })
  :
    null

  return (
    <ul className="allergies">
      {content}
    </ul>
  )
};

export default Allergies;