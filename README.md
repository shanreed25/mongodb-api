# Connecting a Database

> Demonstrates setting up a production-ready database on MongoDB Atlas and creating a simple Node.js/Express application that can successfully connect to it.


### Set Up the Node.js/Express Project
- [X] Create a new directory for your project (e.g., social-media-api).
- [X] Initialize a new Node.js project with `npm init -y`.
- [X] Install the necessary packages: express, mongodb, and dotenv.
- [X] Create a `.gitignore` file and add `node_modules/` and `.env` to it.
- [X] Create a `.env` file and add your MongoDB Atlas connection string to it. Be sure to replace `<password>` with the actual password you created.

### Build the Express Application
- [X] Create a file named `server.js`.
- [X] In `server.js`, build a simple Express application that connects to your MongoDB database. The server should:
    - [X] Import `express`, `mongodb`, and `dotenv`.
    - [X] Load environment variables from the `.env` file.
    - [X] Create an Express app instance.
    - [X] Define a port (e.g., 3001).
    - [X] Use the MongoClient to connect to the database using the URI from your environment variables.
    - [X] Create a single GET route at `/` that, upon a successful database connection, sends back a JSON response: { message: "Successfully connected to the database!" }. If the connection fails, it should send a 500 status code with a message: { message: "Failed to connect to the database." }.
    - [X] Start the server.

## Reflection Questions
#### Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?
> Whitelisting IP addresses means only approved servers can connect to the database. If someone get a hold of your username and password but their IP address is not whitelisted thaey still will not be able to access it. With `0.0.0.0/0` anyone can connect from anywhere as long as they have the username and password. So whitelisting give your database a second layer of security.


#### What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?
> The purpose of the `dotenv` package is so you can use a `.env` file to load environment variables, so these variables are not hardcoded into the code and not added to GitHub. In production when using a cloud hosting service, these services usually allow you to set environment variables when setting up the project in your dashboard, so you do not need a `.env` file. 


#### If your application failed to connect, what are the first few steps you would take to debug the issue?
> If the application failed the server log the error message, so I would read that message, check that my connection string is correct and if the environment varibale for the connection string is being used.