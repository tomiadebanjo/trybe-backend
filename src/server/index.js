import http from 'http';
import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || 6600;

server.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
