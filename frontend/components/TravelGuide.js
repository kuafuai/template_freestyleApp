import React from 'react';

class TravelGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guideData: null,
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchGuideData();
  }

  fetchGuideData() {
    // Simulating an API call to fetch the travel guide data
    setTimeout(() => {
      const guideData = {
        title: 'Travel Guide',
        destinations: [
          {
            name: 'Paris',
            description: 'The city of love'
          },
          {
            name: 'Tokyo',
            description: 'The bustling metropolis'
          },
          {
            name: 'Rome',
            description: 'The eternal city'
          }
        ]
      };

      this.setState({
        guideData,
        isLoading: false
      });
    }, 2000);
  }

  render() {
    const { guideData, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h1>{guideData.title}</h1>
        <ul>
          {guideData.destinations.map(destination => (
            <li key={destination.name}>
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TravelGuide;
