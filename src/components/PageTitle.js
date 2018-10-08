import React from 'react';

const PageTitle = (props) => {

  const secondaryTitle = props.courseTitle
  ?
    <h4 className="page-title__secondary">{props.courseTitle.name}</h4>
  :
    null

  return (
    <section className="page-title text-center">
      <h2 className="page-title__primary">{props.mainTitle}</h2>
      {secondaryTitle}
    </section>
  )
};

export default PageTitle;