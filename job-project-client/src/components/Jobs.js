import React from 'react';

const Jobs = (props) => (

  <div>
  {props.jobs.map(job => 
           <div className="col-xs-8 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
              <div className="caption">
                <div className='col-lg-4'>
                    <span className="glyphicon glyphicon-credit-card"></span>
                    <span className="glyphicon glyphicon-trash pull-right text-primary"></span>
                </div>
                <div className='col-lg-4 well well-add-card'>
                    <h4>{job.title}</h4>
                </div>
                <div className='col-lg-4'>
                    <p>4111xxxxxxxx3265</p>
                    <p className="text-muted">Exp: 12-08</p>
                </div>
                <button type="button" className="btn btn-primary btn-xs btn-update btn-add-card">Update</button>
            </div>
          </div>
        </div>
        )}
        </div>
      );

export default Jobs;