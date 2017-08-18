import React from 'react';


export default class Layout extends React.Component {


  addFilter(item) {
    debugger
  }


  render() {
    return (
    <div>
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
      {this.props.categories.map(category =>
      <tbody>
        <tr>
          <td><input type="radio" onClick={this.addFilter.bind(this,category)}/>{category.name}</td>
        </tr>
        </tbody>
          )}
      </div>
    </div>
    );
  }
}
