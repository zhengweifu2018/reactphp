import React, { Component, PropTypes } from 'react';

import Select from './Select';

export default class RelationSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndices: props.activeIndices
    };
  }

  componentWillReceiveProps(newProps) {
    if(newProps.activeIndices !== undefined) {
      this.setState({activeIndices: newProps.activeIndices});
    }
  }

  getSubhierarchiesFromLevelAndIndices(hierarchies, indices) {
    let tempHierarchies = hierarchies;
    for(let i = 0; i < indices.length; i ++) {
      tempHierarchies = tempHierarchies[Object.keys(tempHierarchies)[indices[i]]];
    }

    return tempHierarchies;
  }

  getActiveIndices(hierarchies, indices = []) {
    if(Object.prototype.toString.call(hierarchies) === '[object Array]') {
      indices.push(0);
    } else if(Object.prototype.toString.call(hierarchies) === '[object Object]') {
      indices.push(0);
      this.getActiveIndices(hierarchies[Object.keys(hierarchies)[0]], indices);
    }

    return indices;
  }

  renderSelect(items, activeIndex, level) {
    return (
      <div key={level} className='col-sm-3'>
        <Select items={items} activeIndex={activeIndex} onChange={(e, item, index) => {
          let newActiveIndices = this.state.activeIndices.slice(0, level);
          newActiveIndices.push(index);
          let subHierarchies = this.getSubhierarchiesFromLevelAndIndices(this.props.hierarchies, newActiveIndices);
          let nextActiveIndeices = this.getActiveIndices(subHierarchies);
          newActiveIndices = [...newActiveIndices, ...nextActiveIndeices];

          this.setState({activeIndices : newActiveIndices});

        }}/>
      </div>
    );
  }

  renderSelects(selects = []) {
    let indices = this.state.activeIndices;

    for( let i = 0; i < indices.length; i ++) {

      let tempHierarchies = this.getSubhierarchiesFromLevelAndIndices(this.props.hierarchies, indices.slice(0, i));

      let items = [];

      if(Object.prototype.toString.call(tempHierarchies) === '[object Array]') {
        items = tempHierarchies;
      } else if(Object.prototype.toString.call(tempHierarchies) === '[object Object]') {
        items = Object.keys(tempHierarchies);
      }

      selects.push(this.renderSelect(items, indices[i], i));
    }

    return selects;
  }

  render() {
    return (
      <div className='row'>
        {this.renderSelects()}
      </div>
    );
  }
}
