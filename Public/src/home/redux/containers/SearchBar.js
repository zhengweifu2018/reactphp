import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { getWeatherData } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  onHandleChange(e) {
    this.props.getWeatherData(this.state.value);

    if(this.props.onClick) {
      this.props.onClick(e, this.state.value);
    }

    this.setState({value: ''});
  }

  render() {
    return (
      <div className='input-group'>
        <span className='input-group-btn'>
          <button className='btn btn-default' type='button' onClick={e => {
            this.onHandleChange(e);
          }}>search</button>
        </span>
        <input type='text' className='form-control' placeholder='Search for city' value={this.state.value} onChange={e => {
            this.setState({value: e.target.value});
          }} onKeyDown={e => {
            if(e.keyCode == 13) {
              this.onHandleChange(e);
            }
          }}/>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  value: ''
};

SearchBar.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getWeatherData
  }, dispatch);
}

export default connect(null, mapDispatchToProps, null)(SearchBar);
