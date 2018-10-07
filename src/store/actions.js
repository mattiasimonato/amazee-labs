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