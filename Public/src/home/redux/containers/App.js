import React, { Component, PropTypes } from 'react';

import SearchBar from './SearchBar';

import WeatherTable from './WeatherTable';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div class="form-group">
          <SearchBar onClick={(e, city) => {
            // console.log(city);
          }}/>
        </div>
        <div class="form-group">
          <WeatherTable />
        </div>
      </div>
    );
  }
}
