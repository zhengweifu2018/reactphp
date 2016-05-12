import React, { Component, PropTypes } from 'react';

import WeatherItem from '../components/WeatherItem';

import { connect } from 'react-redux';

class WeatherTable extends Component {
  renderItems() {
    return this.props.weatherDatas.map((data, index) => {
      return <WeatherItem key={'weather_' + index} weatherData={data} />;
    });
  }

  render() {
    return (
      <table className='table'>
        <thead><tr>
          <th>city (城市)</th>
          <th>temperature (温度)</th>
          <th>pressure (压力)</th>
          <th>humidity (湿度)</th>
        </tr></thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

WeatherTable.defaultProps = {
  weatherDatas: []
};

WeatherTable.propTypes = {
  weatherDatas: PropTypes.object
};

function mapStateToProps(state) {
  return {
    weatherDatas: state.weatherDatas
  };
}

export default connect(mapStateToProps)(WeatherTable);
