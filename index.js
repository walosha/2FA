const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const JsonDB = require("node-json-db").JsonDB;
const Config = require("node-json-db/dist/lib/JsonDBConfig").Config;
const uuid = require("uuid");
const speakeasy = require("speakeasy");

const app = express();
// Serving static files
app.use(express.static(path.join(__dirname, "client/build")));
/**
 * Creates a node-json-db database config
 * @param {string} name - name of the JSON storage file
 * @param {boolean} Tells the to save on each push otherwise the save() mthod has to be called.
 * @param {boolean} Instructs JsonDB to save the database in human readable format
 * @param {string} separator - the separator to use when accessing database values
 */
const dbConfig = new Config("myDataBase", true, false, "/");

/**
 * Creates a Node-json-db JSON storage file
 * @param {instance} dbConfig - Node-json-db configuration
 */
const db = new JsonDB(dbConfig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/api/v1/register", (req, res) => {
//   const id = uuid.v4();

//   try {
//     const path = `/user/${id}`;
//     // Create temporary secret until it it verified
//     const temp_secret = speakeasy.generateSecret();
//     // Create user in the database
//     db.push(path, { id, temp_secret });
//     // Send user id and base32 key to user
//     res.json({ id, secret: temp_secret.base32 });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ message: "Error generating secret key" });
//   }
// });

app.post("/api/v1/register", (req, res) => {
  const { username, email, password } = req.body;
  console.log({ username, email, password });

  const path = `/user/${email}`;
  const isEmailExist = db.exists(path);

  if (!isEmailExist) {
    const path = `/user/${email}`;
    // const id = uuid.v4();
    const temp_secret = speakeasy.generateSecret();
    db.push(path, { path, email, username, password, temp_secret });

    res.status(201).json({
      data: { username, email, secret: temp_secret.base32 },
    });
  }

  if (isEmailExist) {
    res.status(400).json({ data: { message: "Email Exists in our Database" } });
  }
});

app.post("/api/v1/verify", (req, res) => {
  const { userId, token } = req.body;
  try {
    // Retrieve user from database
    const path = `/user/${userId}`;
    const user = db.getData(path);
    const { base32: secret } = user.temp_secret;
    const verified = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token,
    });
    if (verified) {
      // Update user data
      db.push(path, { id: userId, secret: user.temp_secret });
      res.json({ verified: true });
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving user" });
  }
});

const port = 9000;
app.listen(port, () => {
  console.log(`App is running on PORT: ${port}.`);
});
