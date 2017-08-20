const initialState = {title: '',
company: '',
description: '',
url: '',
job_type: ''}

export default (state = initialState, action) => {
  
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.jobFormData

    case 'RESET_JOB_FORM':
      return state;

  default:
    return state;
  }
}