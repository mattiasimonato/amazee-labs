import * as actionType from './actionType'

export const increasePage = (page) => {
  return ({
    type: actionType.INCREASE_PAGE,
    courseTypeSelected: page
  })
}

export const decreasePage = (page) => {
  return ({
    type: actionType.INCREASE_PAGE,
    courseTypeSelected: page
  })
}

export const addCourse = (course) => {
  return ({
    type: actionType.ADD_COURSE,
    selectedCourse: course
  })
}

export const removeCourse = (index) => {
  return ({
    type: actionType.REMOVE_COURSE,
    index: index
  })
}

export const setConfirmedOrders = (confirmedOrders) => {
  return ({
    type: actionType.SET_CONFIRMED_ORDERS,
    confirmedOrders: confirmedOrders
  })
}

export const setConfirmedOrdersAllergies = (confirmedAllergies) => {
  return ({
    type: actionType.SET_CONFIRMED_ORDERS_ALLERGIES,
    confirmedAllergies: confirmedAllergies
  })
}