
import React, { Component } from "react";
import axios from 'axios';
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      currentPage: 1,
      countriesPerPage: 10,
      searchValue: null,
      searchedCountry: null
    };
    this.handleClick = this.handleClick.bind(this);
    axios.get('http://localhost:3001/rest-countries-v1/')
      .then(response => {
        for (var i = 0; i < response.data.length; i++) {
          var value = this.state.countries.concat(response.data[i].name);
          this.setState({ countries: value })
        }
      })
      .catch(error => {
        console.log(error);
      });

  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  searchSpace = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  searchCountry = (e) => {
    axios.get(`http://localhost:3001/rest-countries-v1/${this.state.searchValue}`)
      .then(response => {
        this.setState({ searchedCountry: response.data.name })
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    const { countries, currentPage, countriesPerPage } = this.state;
    console.log(this.state.searchValue)
    // Logic for displaying countries
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    const renderCountries = currentCountries.map((value, index) => {
      return <p className="ml-5" key={index}>{value}</p>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <span
          className="mr-3"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </span>
      );
    });

    return (
      <div>

        <input type="text" className="ml-5 mt-5" placeholder="Enter country name" name="searchValue" onChange={(e) => this.searchSpace(e)} />
        <button type="button" class="btn btn-primary btn-sm" onClick={(e) => this.searchCountry(e)}>Search</button>

        {/* {this.state.searchedCountry !==null ? this.state.searchedCountry : "not found"} */}
        <h5 className="mt-5">
          {renderCountries}
        </h5>
        <div className="ml-5">
          {renderPageNumbers}
        </div>
      </div>
    );
  }
}

export default Home;