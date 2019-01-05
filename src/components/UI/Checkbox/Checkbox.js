import React, {Component} from 'react'

class Checkbox extends Component {
    render () {
        return (
            <div>
            <input type="checkbox" />
            {this.props.children}
            </div>
        );
    };
}

export default Checkbox;