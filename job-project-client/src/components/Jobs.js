import React from 'react';
import './Jobs.css'
import Jobform from './Jobform'
import { connect } from 'react-redux';
import { getJobs } from '../actions/jobs';
import { deleteJob } from '../actions/jobs';

class Jobs extends React.Component {

  checkCategory(category, e) {
    this.props.filterCategory(category, e)
  }

  handleCheck(e) {
    this.props.filterType(e)
  }

  componentDidMount() {
    this.props.getJobs();
  }

  deleteJob(job, e) {
    this.props.deleteJob(job);
    this.props.getJobs();

  }


  render() {
  return (
  <div>
      <div className="col-xs-7 col-sm-4 col-md-4 col-lg-4 text-left">
      <span className="label label-primary">Categories</span>
        <br />
        {this.props.categories.map(category =>
          <tbody>
            <tr>
              <td><input type="checkbox" value={category} onChange={(e) => this.checkCategory(category, e)}/>{category.name}</td>
            </tr>
          </tbody>
              )}
        <Jobform />

    </div >

    <div className="col-xs-5 col-sm-8 col-md-8 col-lg-8 pull-right">
        {this.props.jobs.map(job =>
            <div className="thumbnail">
                <div className="caption">
                  <div className='col-lg-4'>
                  </div>
                  <div className='col-lg-4 well well-add-card pull-left'>
                      <h4>{job.title}</h4>
                  </div>
                  <div className='col-lg-4'>
                      <p>{job.company}</p>
                      <p>{job.url}</p>
                      <p>{job.job_type}</p>
                      <p className="text-muted">{job.description}</p>
                  </div>
                  <a type="button" className="btn btn-danger btn-xs btn-update btn-add-card" onClick={this.deleteJob.bind(this,job)}>Delete Job</a>
              </div>
            </div>
            )}
          </div>
      </div>
        );
  }
}

const mapStateToProps = (state) => {
  return ({
    jobs: state.jobs
  })
}

export default connect(mapStateToProps, { getJobs, deleteJob})(Jobs) 
