import express from 'express';
import app from './app';

const server = express();

// Error handling middleware
server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Routes
import routes from './routes';
server.use('/', routes);

// Environment variable for port
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default server;