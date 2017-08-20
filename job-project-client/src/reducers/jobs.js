export default (state = [], action) => {
  switch(action.type) {
    case 'GET_JOBS_SUCCESS':
      return action.jobs

    default:
      return state;
  }
}