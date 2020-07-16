
const countryRoutes = require("./countries");
const appRouter = (app, fs) => {
// checking base route in the application
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });
  countryRoutes(app, fs);
};

module.exports = appRouter;