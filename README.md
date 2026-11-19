# Connecting a Database

> Demonstrates setting up a production-ready database on MongoDB Atlas and creating a simple Node.js/Express application that can successfully connect to it.


### Set Up the Node.js/Express Project
- [X] Create a new directory for your project (e.g., social-media-api).
- [X] Initialize a new Node.js project with `npm init -y`.
- [X] Install the necessary packages: express, mongodb, and dotenv.
- [X] Create a `.gitignore` file and add `node_modules/` and `.env` to it.
- [X] Create a `.env` file and add your MongoDB Atlas connection string to it. Be sure to replace `<password>` with the actual password you created.

### Build the Express Application
- [ ] Create a file named server.js.
- [ ] In server.js, build a simple Express application that connects to your MongoDB database. The server should:
- [ ] Require express, mongodb, and dotenv.
- [ ] Load environment variables from the .env file.
- [ ] Create an Express app instance.
- [ ] Define a port (e.g., 3001).
- [ ] Use the MongoClient to connect to the database using the URI from your environment variables.
- [ ] Create a single GET route at / that, upon a successful database connection, sends back a JSON response: { message: "Successfully connected to the database!" }. If the connection fails, it should send a 500 status code with a message: { message: "Failed to connect to the database." }.
- [ ] Start the server.

