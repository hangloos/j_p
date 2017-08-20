import React from 'react';
import './Jobs.css'


export default class Jobform extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      
    }
  }


onChange(e) {
  const value = e.target.name
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit(e) {
debugger
}

  render() {
  return (
        <div>
            <div className="form-area">  
              <form role="form" onSubmit={this.handleSubmit.bind(this)}>
                <br />
              <h3 >Create Job</h3>
                    <div className="form-group">
                    <input type="text" className="form-control" id="title" name="title" onChange={this.onChange.bind(this)} placeholder="Title" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="company" name="company" onChange={this.onChange.bind(this)} placeholder="Company" required />
                  </div>
                  <div className="form-group">
                  <textarea className="form-control" type="textarea" id="description" name="description" onChange={this.onChange.bind(this)}  placeholder="Job Description" rows="7"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="url" className="form-control" id="url" name="url" onChange={this.onChange.bind(this)}  placeholder="Company Website" required />
                  </div>
                  <div className="form-group">
                  <select onChange={this.onChange.bind(this)} >
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

// title text, required, description, text box required, url, company, type ( dropdown)
