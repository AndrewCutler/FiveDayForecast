import React, { Component } from 'react';
import './LocationForm.css'

class LocationForm extends Component {
  constructor(props) {
    super(props)
  }

  render() { 
    return ( 
    <div className="zipcode">
      <form onSubmit={this.props.onSubmit}>
        Enter zip code: 
        <input type="text" onChange={this.props.onChange} value={this.props.value} ref={this.props.ref2}></input>
        <button type="submit">Submit</button>
      </form>
    </div> );
  }
}
 
export default LocationForm;