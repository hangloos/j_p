import React from 'react';

const Jobs = (props) => (

  <div>
    <h1>Jobs</h1>
      {props.jobs.map(job => 
        <div>
          <h3>{job.title}</h3>
          <h2>{job.description}</h2>
          <button className="btn">Test</button>
        </div>
        )}
        </div>
      );

export default Jobs;