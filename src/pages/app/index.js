import React from 'react';
import Layout from '../../components/layout'

let App = (props) => (
    <Layout>
        { props.children}
    </Layout>
);

App.propTypes = {
    children: React.PropTypes.node
};

export default App;
