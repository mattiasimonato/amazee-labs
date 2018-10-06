import React from 'react';

const MainContainer = (props) => {
  return (
    <main className="container main-container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-8">
          {props.children}
        </div>
      </div>
    </main>
  )
};

export default MainContainer;