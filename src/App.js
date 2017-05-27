import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){

    super();

    this.state = {
      countries: [],
      name: "",
      code: "",
    };

  }

  componentDidMount(){

    let th = this;
    this.serverRequest = axios.get("https://raw.githubusercontent.com/zauribrahimkhalilov/json-files/master/countries.json").then(function(result){

    th.setState({
      countries: result.data.countries,
    });

    });

  }

  render() {
    return (
      <div className="container">
        <br/>
        <h3>CountryList App with React <img src={logo} className="App-logo" alt="React logo" /></h3>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">

            {
              
                this.state.countries.map(function(country) {

                    return (
                      <li key={country.code} className="list-group-item justify-content-between">
                        {country.name} <span className="badge badge-default badge-pill">{country.code}</span>
                      </li>
                    );

                })
            }

            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
