import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import RelationSelect from './components/RelationSelect';

import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      relationSelectHierarchies: {},
      relationSelectIndices: []
    };
  }

  componentWillMount() {
    axios.get('/reactphp/index.php/Home/Index/initRelationData')
      .then(response => {
        this.setState({
          relationSelectHierarchies: response.data.hierarchies,
          relationSelectIndices: response.data.indices
        });
      })
      .catch(response => {
        console.log(response);
      });
  }


  render() {
    return (
      <div>
        <RelationSelect
          hierarchies={this.state.relationSelectHierarchies}
          activeIndices={this.state.relationSelectIndices}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
