import * as actionType from './actionType'

const initialState = {
  courseTypes: [],
  courseTypeSelected: 0,
  selectedCourses: [],
  confirmedOrders: [],
  confirmedAllergies: [],
  courses: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionType.INCREASE_PAGE : return {...state, courseTypeSelected: action.courseTypeSelected}
    case actionType.DECREASE_PAGE : return {...state, courseTypeSelected: action.courseTypeSelected}
    case actionType.ADD_COURSE : return {...state, selectedCourses: [...state.selectedCourses, action.selectedCourse]}
    case actionType.REMOVE_COURSE : return {...state, selectedCourses: [...state.selectedCourses.slice(0, action.index), ...state.selectedCourses.slice(action.index + 1)]}
    case actionType.SET_CONFIRMED_ORDERS : return {...state, confirmedOrders: [...action.confirmedOrders]}
    case actionType.SET_CONFIRMED_ORDERS_ALLERGIES : return {...state, confirmedAllergies: [...action.confirmedAllergies]}
    case actionType.SET_COURSES : return {...state, courses: [...action.courses]}
    case actionType.SET_COURSE_TYPES : return {...state, courseTypes: [...action.courseTypes]}
    default : return state;
  }
}
export default reducer