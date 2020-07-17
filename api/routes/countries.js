var fs = require("fs");
var data = fs.readFileSync("./data/countries.json");
var countries = JSON.parse(data);

// To get the list of all the country 
const countryRoutes = (app, fs) => {
  app.get("/rest-countries-v1", authenticateJWT, (req, res) => {});
  function authenticateJWT(req, res, next) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const data = {};
    if (endIndex < countries.length) {
      data.next = {
        page: page + 1,
        limit: limit
      };
    }
    if (startIndex > 0) {
      data.previous = {
        page: page - 1,
        limit: limit
      };
    }

   // setting up the token manually 
    if (req.headers.authorization === "dsds93432$#%^#$#Dfdfd$%@#@") {
    
   // filtering the country with search keyword 
      if (req.query.country !== "") {
        filterCountries = countries.filter(function(user) {
          return user.name.toLowerCase().indexOf(req.query.country) != -1;
        });
        data.data = filterCountries.slice(startIndex, endIndex);
        res.send({ data: data, total: data.data.length });
      }
   // Condition true when no search keyword entered
      else {
        data.data = countries.slice(startIndex, endIndex);
        res.send({ data: data, total: countries.length });
      }
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
