import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Header from "./components/header";
import axios from "axios";
import Pagination from "react-js-pagination";
function Home() {
  const [countries, setCountries] = useState([]);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  // Fetching the country list from the api
  useEffect(() => {
    axios
      .get(
        `http://3.87.165.124:88/rest-countries-v1/?page=${activePage}&limit=${countriesPerPage}&country=${searchKeyword}`,
        {
          headers: {
            Authorization: "dsds93432$#%^#$#Dfdfd$%@#@"
          }
        }
      )

      .then(response => {
        setCountries([]);
        for (let i = 0; i < response.data.data.data.length; i++) {
          setCountries(state => [...state, response.data.data.data[i].name]);
        }
        setTotalCount(response.data.total);
      })
      .catch(error => {
        console.log(error);
      });
  }, [countriesPerPage, activePage, searchKeyword]);

  const renderCountries = countries.map((value, index) => {
    return (
      <ul key={index}>
        <li> {value}</li>
      </ul>
    );
  });

  const handleSearchChange = event => {
    setSearchKeyword(event.target.value);
    if (event.target.value === "") {
      setSearchKeyword("");
    }
    setActivePage(1);
  };

  // Configuring the limit of the countries name
  const onChangeLimitValue = event => {
    setCountriesPerPage(parseInt(event.target.value));
  };

  const handlePageChange = number => {
    setActivePage(number);
  };

  return (
    <React.Fragment>
      <Header />
      <MDBRow className="ml-0 mr-0">
        <MDBCol md="6" lg="6" sm="12">
          <div className="md-form mt-0">
            <input
              className="form-control"
              type="text"
              value={searchKeyword}
              onChange={handleSearchChange}
              placeholder="Search"
              aria-label="Search"
              name="search"
              id="search"
            />
          </div>
          <h5 className="mt-5">{renderCountries}</h5>
        </MDBCol>

        <MDBCol md="6" lg="6" sm="12" className="word-wrap">
          <div className="form-group mt-2">
            <select
              className="form-control"
              value={countriesPerPage}
              onChange={onChangeLimitValue}
              name="limit"
              id="limit"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mr-0 mt-5">
        <div className="ml-5">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={countriesPerPage}
            totalItemsCount={totalCount}
            pageRangeDisplayed={5}
            itemClass="page-item"
            linkClass="page-link"
            onChange={handlePageChange}
          />
        </div>
      </MDBRow>
    </React.Fragment>
  );
}

export default Home;
