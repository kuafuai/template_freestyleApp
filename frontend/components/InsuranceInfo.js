import React from 'react';
import { Card } from 'jssemantic-ui';

const InsuranceInfo = () => {
  return (
    <Card>
      <Card.Header>Insurance Information</Card.Header>
      <Card.Content>
        <p>Here is some information about insurance:</p>
        <ul>
          <li>Insurance coverage is important for any trip.</li>
          <li>Make sure to check the coverage details before purchasing insurance.</li>
          <li>Consider factors like medical coverage, trip cancellation, and lost baggage.</li>
          <li>Compare different insurance providers to find the best coverage for your needs.</li>
        </ul>
      </Card.Content>
    </Card>
  );
};

export default InsuranceInfo;