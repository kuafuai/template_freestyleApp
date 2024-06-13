// TODO: Implement the TravelOptions component code here

import React from 'react';
import { Card, Icon } from 'jssemantic-ui';

const TravelOptions = ({ options }) => {
  return (
    <div>
      <h2>Recommended Travel Options</h2>
      <Card.Group>
        {options.map((option, index) => (
          <Card key={index}>
            <Card.Content>
              <Card.Header>{option.title}</Card.Header>
              <Card.Meta>{option.location}</Card.Meta>
              <Card.Description>{option.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="star" />
              {option.rating} stars
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default TravelOptions;
