import React, { Component } from 'react';
import Layout from '../../components/layout'

class App extends Component {
  render() {
    return (
        <Layout>
            { this.props.children}
        </Layout>
    );
  }
}

App.propTypes = {
    children: React.PropTypes.node
};

export default App;
