import React from 'react';
import './Jobs.css'
import axios from 'axios'
import { connect } from 'react-redux';

import { updateJobFormData } from '../actions/jobForm';
import { createJob } from '../actions/jobs';


class Jobform extends React.Component {

  onChange = e => {
    const { value , name } = e.target;
    const currentJobFormData = Object.assign({}, this.props.jobFormData, {
      [name]: value
    })
   
    this.props.updateJobFormData(currentJobFormData)
  }

  handleSubmit(e) {
  e.preventDefault();

  this.props.createJob(this.props.jobFormData)

    
  }

  render() {

    const {title, company, description, url, job_type} = this.props.jobFormData



  return (
        <div>
            <div className="form-area">  
              <form role="form" onSubmit={this.handleSubmit.bind(this)}>
                <br />
              <h3 >Create Job</h3>
                    <div className="form-group">
                    <input type="text" className="form-control" id="title" value={title} name="title" onChange={this.onChange} placeholder="Title" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="company" value={company} name="company" onChange={this.onChange} placeholder="Company" required />
                  </div>
                  <div className="form-group">
                  <textarea className="form-control" type="textarea" value={description} id="description" name="description" onChange={this.onChange}  placeholder="Job Description" rows="7"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="url" className="form-control" id="url" value={url} name="url" onChange={this.onChange}  placeholder="Company Website" required />
                  </div>
                  <div className="form-group">
                  <select name="job_type" value={job_type} onChange={this.onChange} >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                  </select>
                  </div>
                  <input type="submit" className="btn btn-success" value="Submit" />              
                </form>
            </div>

        </div>

          );
  }

}

const mapStateToProps = state => {
  return {
    jobFormData: state.jobFormData
  }
}

export default connect(mapStateToProps, { updateJobFormData, createJob })(Jobform)


