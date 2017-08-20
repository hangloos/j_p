import React from 'react';
import './Jobs.css'


export default class Jobform extends React.Component {


onChange() {
  console.log("changing text")
}

handleSubmit(e) {
debugger
e.preventDefault()
}

  render() {
  return (
        <div>
            <div className="form-area">  
              <form role="form" onSubmit={this.handleSubmit.bind(this)}>
                <br />
              <h3 >Create Job</h3>
                    <div className="form-group">
                    <input type="text" className="form-control" id="title" name="title" onChange={this.onChange} placeholder="Title" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="company" name="company" placeholder="Company" required />
                  </div>
                  <div className="form-group">
                  <textarea className="form-control" type="textarea" id="description" onChange={this.onChange}  placeholder="Job Description" rows="7"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="url" className="form-control" id="url" name="url" onChange={this.onChange}  placeholder="Company Website" required />
                  </div>
                  <div className="form-group">
                  <select>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                  </select>
                  </div>
                <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Submit Form</button>
              </form>
            </div>

        </div>

          );
  }

}

// title text, required, description, text box required, url, company, type ( dropdown)
