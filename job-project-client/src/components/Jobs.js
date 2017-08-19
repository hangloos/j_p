import React from 'react';


export default class Jobs extends React.Component {

  checkCategory(category, e) {
    this.props.filterCategory(category, e)
  }

  render() {
  return (
  <div>
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
        <a className="btn icon-btn btn-primary pull-left" href="#"><span className="glyphicon btn-glyphicon glyphicon-plus img-circle"></span>Add Job</a>
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
