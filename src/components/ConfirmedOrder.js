import React from 'react';

const ConfirmedOrder = (props) => {

  const content = props.orders ?
    props.orders.map((order) => {
      console.log('dentro', props.courseName)
      return <li key={order.id} className="confirmed-order__item">{order.title}</li>
    })
  :
    null

  return (
    <div className="confirmed-order">
      <h4 className="confirmed-order__title">{props.courseName}</h4>
      <ul className="confirmed-order__list">
        {content}
      </ul>
    </div>
  )
};

export default ConfirmedOrder;