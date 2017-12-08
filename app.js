const vertex = require("vertex360")({ site_id: process.env.TURBO_APP_ID });

// initialize app
const app = vertex.app();

// import routes
const index = require("./routes/index");
const api = require("./routes/api");
const instagram = require("./routes/instagram");

// set routes
app.use("/", index);
app.use("/api", api);
app.use("/instagram", instagram);

module.exports = app;
