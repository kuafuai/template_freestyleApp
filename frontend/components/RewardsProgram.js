import React from 'react';
import { Card, Icon } from 'jssemantic-ui';

const RewardsProgram = () => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Rewards Program</Card.Header>
        <Card.Description>
          This is the rewards program section of the travel guide website.
          Add your rewards program details here.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="star" />
        100 points = $1 off your next booking
      </Card.Content>
    </Card>
  );
};

export default RewardsProgram;