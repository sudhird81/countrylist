var fs = require('fs'); 
var data = fs.readFileSync('./data/countries.json'); 
   
var countries = JSON.parse(data); 

const countryRoutes = (app, fs) => {
    // variables
    const dataPath = "./data/countries.json";
    // READ




    app.get("/rest-countries-v1", (req, res) => {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data));
      });
    });










      app.get('/rest-countries-v1/:name/',(req, res) => { 
        var word = req.params.name; 
        word = word.charAt(0).toUpperCase() 
            + word.slice(1).toLowerCase(); 
        if(word) { 
            for (var i=0 ; i < countries.length ; i++)
                  {
                    if (countries[i].name == word) {
                         var reply = countries[i] ; 
                      }
                  }
        } 
       res.send(reply); 
    }); 

    
  };
  
  module.exports = countryRoutes;