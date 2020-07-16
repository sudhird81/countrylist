var fs = require("fs");
var data = fs.readFileSync("./data/countries.json");
var countries = JSON.parse(data);


// To get all the country list
const countryRoutes = (app, fs) => {
  const dataPath = "./data/countries.json";
  app.get("/rest-countries-v1", authenticateJWT, (req, res) => {});
  function authenticateJWT(req, res, next) {
    if (req.headers.authorization === "dsds93432$#%^#$#Dfdfd$%@#@") {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data));
      });
    } else res.sendStatus(403);
  }
// To get the single country detail from all the countries
  app.get("/rest-countries-v1/:name/", (req, res) => {
    var word = req.params.name;
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    if (word) {
      for (var i = 0; i < countries.length; i++) {
        if (countries[i].name == word) {
          var reply = countries[i];
        }
      }
    }
    res.send(reply);
  });
};

module.exports = countryRoutes;
