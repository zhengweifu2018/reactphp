import React, { Component, PropTypes } from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';

export default class WeatherItem extends Component {
  renderItems() {
    let items = [];

    let cityName = '', tempList = [], pressureList = [], humidityList = [];

    if(this.props.weatherData.city) {
      cityName = this.props.weatherData.city.name;
    }

    if(this.props.weatherData.list) {
      for(let each of this.props.weatherData.list) {
        tempList.push(each.main.temp);
        pressureList.push(each.main.pressure);
        humidityList.push(each.main.humidity);
      }
    }

    if(cityName.length > 0) {
      items.push(<th>{cityName}</th>);
    }

    if(tempList.length > 0) {
      items.push(
        <th><Sparklines data={tempList}>
          <SparklinesLine color='red' />
        </Sparklines></th>
      );
    }

    if(pressureList.length > 0) {
      items.push(
        <th><Sparklines data={pressureList} limit={pressureList.length} width={200} height={50} margin={5}>
          <SparklinesLine color='blue' />
        </Sparklines></th>
      );
    }

    if(humidityList.length > 0) {
      items.push(
        <th><Sparklines data={humidityList} limit={humidityList.length} width={200} height={50} margin={5}>
          <SparklinesLine color='orange' />
        </Sparklines></th>
      );
    }

    return items;
  }

  render() {
    return(
      <tr>
        {this.renderItems()}
      </tr>
    );
  }
}

WeatherItem.defaultProps = {
  weatherData: {}
};

WeatherItem.propTypes = {
  city: PropTypes.object
};
