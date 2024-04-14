import clientConnection from './db.client.js';

export const connectToDatabase = (uri, options) => {
  // Establish the database connection
  const clientDB = clientConnection(uri, options);
  return clientDB;
};
