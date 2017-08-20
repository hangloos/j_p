const API_URL = process.env.JOB_APP_API_URL;

//action creators

const setJobs = jobs => {
  return {
    type: 'GET_JOBS_SUCCESS',
    jobs
  }
}

//async actions
export const getJobs = () => {
 return dispatch => {
    return fetch('http://localhost:3000/api/jobs')
      .then(res => res.json())
      .then(jobs => dispatch(setJobs(jobs)))
      .catch(error => console.log(error))
  }
}

