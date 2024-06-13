import React from 'react';
import { Feed } from 'jssemantic-ui';

const CommunityFeed = () => {
  const feedItems = [
    {
      id: 1,
      user: 'John Doe',
      content: 'Just posted a new photo from my trip to Paris!',
      timestamp: '2 hours ago',
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      user: 'Jane Smith',
      content: 'Looking for recommendations for a beach vacation. Any suggestions?',
      timestamp: '4 hours ago',
      likes: 15,
      comments: 8,
    },
    {
      id: 3,
      user: 'Mike Johnson',
      content: 'Excited to share my travel itinerary for Japan. Check it out!',
      timestamp: '1 day ago',
      likes: 20,
      comments: 12,
    },
  ];

  return (
    <Feed>
      {feedItems.map((item) => (
        <Feed.Item key={item.id}>
          <Feed.Content>
            <Feed.User>{item.user}</Feed.User>
            <Feed.Summary>{item.content}</Feed.Summary>
            <Feed.Meta>
              <Feed.Like>{item.likes} Likes</Feed.Like>
              <Feed.Comment>{item.comments} Comments</Feed.Comment>
              <Feed.Timestamp>{item.timestamp}</Feed.Timestamp>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Item>
      ))}
    </Feed>
  );
};

export default CommunityFeed;