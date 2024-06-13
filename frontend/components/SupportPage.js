import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const SupportPage = () => {
  return (
    <Container>
      <Segment>
        <Header as="h1">Support Page</Header>
        <p>
          Welcome to the support page of our travel guide website. If you have any questions or need assistance, please
          feel free to contact our support team.
        </p>
        <p>Contact information:</p>
        <ul>
          <li>Email: support@travelguide.com</li>
          <li>Phone: 123-456-7890</li>
        </ul>
      </Segment>
    </Container>
  );
};

export default SupportPage;
