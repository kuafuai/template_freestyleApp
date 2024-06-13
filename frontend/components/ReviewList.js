import React from 'react';
import { Card, Icon, Rating } from 'semantic-ui-react';

const ReviewList = ({ reviews }) => {
  return (
    <Card.Group>
      {reviews.map((review, index) => (
        <Card key={index}>
          <Card.Content>
            <Card.Header>{review.title}</Card.Header>
            <Card.Meta>{review.author}</Card.Meta>
            <Card.Description>{review.content}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={review.rating} maxRating={5} disabled />
            <Icon name='comment' />
            {review.comments.length} Comments
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default ReviewList;