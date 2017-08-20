import React from 'react';


export default class Jobs extends React.Component {

  checkCategory(category, e) {
    this.props.filterCategory(category, e)
  }

  handleCheck(e) {
    this.props.filterType(e)
  }

  render() {
  return (
  <div>
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
      <span className="label label-primary">Categories</span>
        <br />
        {this.props.categories.map(category =>
          <tbody>
            <tr>
              <td><input type="checkbox" value={category} onChange={(e) => this.checkCategory(category, e)}/>{category.name}</td>
            </tr>
          </tbody>
              )}

    </div >

    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 pull-right">
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
                      <p className="text-muted">{job.description.substring(0, 70)}</p>
                  </div>
                  <button type="button" className="btn btn-success btn-xs btn-update btn-add-card">View Job</button>
              </div>
            </div>
            )}
          </div>
      </div>
        );
  }
}


        // <span className="label label-primary">Job Type</span>
        // <tbody>
        //   <tr>
        //     <td><input type="checkbox" value="Full-Time" onChange={(e) => this.handleCheck(e)}/>Full-Time</td>
        //   </tr>
        //   <tr>
        //     <td><input type="checkbox" value="Part-Time" onChange={(e) => this.handleCheck(e)}/>Part-Time</td>
        //   </tr>
        // </tbody>
