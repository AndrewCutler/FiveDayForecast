import React, { Component } from 'react';

class LocationForm extends Component {
  constructor(props) {
    super(props)
  }

  render() { 
    return ( 
    <div className="zipcode">
      <form onSubmit={this.props.onSubmit} >
        <span>Enter zip code:</span> 
        <input type="text" onChange={this.props.onChange} value={this.props.value} ref={this.props.setRef}></input>
        <button type="submit">Submit</button>
      </form>
    </div> );
  }
}
 
export default LocationForm;