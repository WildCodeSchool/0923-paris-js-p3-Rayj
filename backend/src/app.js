const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://mysite.com",
      "http://another-domain.com",
      "http://127.0.0.1:3000",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "150mb" }));
// app.use(express.text());
// app.use(express.raw());

/* ************************************************************************* */

// Cookies: Why and how to use the `cookie-parser` module?

// Cookies are small pieces of data stored in the client's browser. They are often used to store user-specific information or session data.

// The `cookie-parser` module allows us to parse and manage cookies in our Express application. It parses the `Cookie` header in incoming requests and populates `req.cookies` with an object containing the cookies.

// To use `cookie-parser`, make sure it is installed in `backend/package.json` (you may need to install it separately):
// npm install cookie-parser

// Then, require the module and use it as middleware in your Express application:

const cookieParser = require("cookie-parser");

app.use(cookieParser());

const router = require("./router");

app.use("/api", router);

/* ************************************************************************* */

// Production-ready setup: What is it for, and when should I enable it?

// The code includes commented sections to set up a production environment where the frontend and backend are served from the same server.

// What it's for:
// - Serving frontend static files from the backend, which is useful when building a single-page application with React, Angular, etc.
// - Redirecting unhandled requests (e.g., all requests not matching a defined API route) to the frontend's index.html. This allows the frontend to handle client-side routing.

// When to enable it:
// It depends on your project and its structure. If you are developing a single-page application, you'll enable these sections when you are ready to deploy your project to production.

// To enable production configuration:
// 1. Uncomment the lines related to serving static files and redirecting unhandled requests.
// 2. Ensure that the `reactBuildPath` points to the correct directory where your frontend's build artifacts are located.

/*
const reactBuildPath = `${__dirname}/../../frontend/dist`;

// Serve react resources

app.use(express.static(reactBuildPath));

// Redirect unhandled requests to the react index file

app.get("*", (req, res) => {
  res.sendFile(`${reactBuildPath}/index.html`);
});
*/

/* ************************************************************************* */

// Middleware for Error Logging (Uncomment to enable)
// Important: Error-handling middleware should be defined last, after other app.use() and routes calls.

const publicFolderPath = path.join(__dirname, "../public");
app.use(express.static(publicFolderPath));

// Define a middleware function to log errors
// eslint-disable-next-line no-unused-vars
const logErrors = (err, req, res, next) => {
  console.error(err);
  console.error("on req:", req.method, req.path);

  // Pass the error to the next middleware in the stack
  res.sendStatus(500);
};

app.use(logErrors);

module.exports = app;
