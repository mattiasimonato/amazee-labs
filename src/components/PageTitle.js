import React from 'react';

const PageTitle = (props) => {
  return (
    <section className="page-title text-center">
      <h2 className="page-title__primary">à la carte menu</h2>
      <h4 className="page-title__secondary">{props.courseTitle}</h4>
    </section>
  )
};

export default PageTitle;