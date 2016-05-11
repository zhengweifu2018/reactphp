import React, { Component, PropTypes } from 'react';

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: props.activeIndex,
      items: props.items
    };
  }

  renderItems() {
    return this.state.items.map((item, index) => {
      return (
        <option key={index} value={item}>{item}</option>
      );
    });
  }

  componentWillReceiveProps(newProps) {
    if(newProps.activeIndex !== undefined) {
      this.setState({activeIndex: newProps.activeIndex});
    }

    if(newProps.items !== undefined) {
      this.setState({items: newProps.items});
    }
  }

  render() {

    let mvalue = this.state.items[this.state.activeIndex] ? this.state.items[this.state.activeIndex] : '';

    return (
      <select className='form-control' value={mvalue} onChange={e => {
        let val = e.target.value;
        let index = this.state.items.findIndex(item => item == val);
        this.setState({activeIndex: index});
        if(this.props.onChange) {
          this.props.onChange(e, val, index);
        }
      }}>
        {this.renderItems()}
      </select>
    );
  }
}

Select.defaultProps = {
  activeIndex: 0
};
