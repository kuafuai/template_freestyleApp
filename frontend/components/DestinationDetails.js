import React from 'react';

class DestinationDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>Destination Details</h1>
        <p>Here are the details of the destination:</p>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Location: {this.props.location}</li>
          <li>Description: {this.props.description}</li>
          <li>Rating: {this.props.rating}</li>
        </ul>
      </div>
    );
  }
}

export default DestinationDetails;
