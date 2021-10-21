import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class C2 extends Component {
    render() {
        return (
            <div>
                Name from props:  {this.props.name}
            </div>
        )
    }
}

C2.propTypes = {
    name: PropTypes.string.isRequired
}

export default C2;