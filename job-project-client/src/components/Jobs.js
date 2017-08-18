import React from 'react';


export default class Jobs extends React.Component {

  constructor(...args) {
    super(...args)

    this.state = {
    }
  }


  render() {
  return (
  <div>
    <h2>Jobs</h2>
    <a className="btn icon-btn btn-primary" href="#"><span className="glyphicon btn-glyphicon glyphicon-plus img-circle"></span>Add Job</a>
        {this.props.jobs.map(job => 
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 pull-right">
            <div className="thumbnail">
                <div className="caption">
                  <div className='col-lg-4'>
                  </div>
                  <div className='col-lg-4 well well-add-card pull-left'>
                      <h4>{job.title}</h4>
                  </div>
                  <div className='col-lg-4'>
                      <p>{job.company}</p>
                      <p className="text-muted">{job.description.substring(0, 70)}</p>
                  </div>
                  <button type="button" className="btn btn-success btn-xs btn-update btn-add-card">View Job</button>
              </div>
            </div>
          </div>
          )}
    </div>
        );
  }
}