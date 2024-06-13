import React from 'react';
import { Feed } from 'jssemantic-ui';

const UpdatesFeed = () => {
  const updates = [
    {
      id: 1,
      title: 'New Destination Added',
      description: 'We have added a new destination to our travel guide. Check it out!',
      date: '2022-01-01',
    },
    {
      id: 2,
      title: 'Special Offer',
      description: 'Get 20% off on all bookings for the next month. Limited time offer!',
      date: '2022-01-05',
    },
    {
      id: 3,
      title: 'Travel Tips',
      description: 'Check out our latest travel tips for a hassle-free journey.',
      date: '2022-01-10',
    },
  ];

  return (
    <Feed>
      {updates.map((update) => (
        <Feed.Event key={update.id}>
          <Feed.Label icon="announcement" />
          <Feed.Content>
            <Feed.Date content={update.date} />
            <Feed.Summary>
              <Feed.User>Travel Guide</Feed.User> {update.title}
            </Feed.Summary>
            <Feed.Extra text>{update.description}</Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      ))}
    </Feed>
  );
};

export default UpdatesFeed;
