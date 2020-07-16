import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import axios from "axios";
function Home() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);
  const [countriesPerPage, setCountriesPerPage] = useState("10");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [active, setActive] = useState(1);
  // Fetching the country list from the api 
  useEffect(() => {
    axios
      .get("http://3.87.165.124:88/rest-countries-v1/")
      .then(response => {
        for (var i = 0; i < response.data.length; i++) {
          setCountries(state => [...state, response.data[i].name]);
          setSearchResults(state => [...state, response.data[i].name]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleClick = event => {
    setCurrentPage(Number(event.target.id));
    setActive(event.target.id)
  };

  // Setting the indexing of the countries

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = searchResults.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const renderCountries = currentCountries.map((value, index) => {
    return (
      <ul key={index}>
        <li> {value}</li>
      </ul>
    );
  });

  // Displaying the page numbers
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(searchResults.length / countriesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handleChange = event => {
    setSearchTerm(event.target.value);

    setSearchResults(
      countries.filter(person =>
        person.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  // Configuring the limit of the countries name
  const onHandleChangeValue = event => {
    setCountriesPerPage(event.target.value);
  };

  // Displaying page number
  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <span className={active == number ? "pr-3 active" : "pr-3"} key={number} id={number} onClick={handleClick}>
        {number}
      </span>
    );
  });

  return (
    <React.Fragment>
      <MDBRow className="ml-0 mr-0">
        <MDBCol md="6" lg="6" sm="12">
          <div className="md-form mt-0">
            <input
              className="form-control"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <h5 className="mt-5">{renderCountries}</h5>
        </MDBCol>

        <MDBCol md="6" lg="6" sm="12" className="word-wrap">
          <div className="form-group mt-2">
            <select
              className="form-control"
              value={countriesPerPage}
              onChange={onHandleChangeValue}
              id="exampleFormControlSelect1"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mr-0 mt-5">
        <MDBCol>
          <h5 className="text-break ml-3">{renderPageNumbers}</h5>
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
}

export default Home;
