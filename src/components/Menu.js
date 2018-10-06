import React from 'react';

import Course from '../containers/Course.js'



const Menu = (props) => {

  const content = props.courses.map( (course, i) => {
    return (
      <li className="menu__item" key={course.id}>
        <Course course={course}/>
      </li>
    )
  })

  return (
    <ul className="menu">
      {content}
    </ul>
  )
};

export default Menu;