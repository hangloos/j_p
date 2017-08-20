import { resetJobForm } from './jobForm';

const API_URL = process.env.JOB_APP_API_URL;


//action creators

const setJobs = jobs => {
  return {
    type: 'GET_JOBS_SUCCESS',
    jobs
  }
}

const addJob = job => {
  return {
    type: "CREATE_JOB_SUCCESS",
    job
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

export const createJob = job => {
  return dispatch => {
    return fetch('http://localhost:3000/api/jobs', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ job: job })
    })

      .then(response => response.json())
      .then(job => {
        dispatch(addJob(job))
        dispatch(resetJobForm())})
      .catch(error => console.log(error))
  }
}


// axios.post(
//   'http://localhost:3000/api/jobs',
//   {job: data}
//   )
//   .then(response => {console.log(response)})
//   .catch(error => console.log(error))