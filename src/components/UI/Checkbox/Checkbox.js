import React, {Component} from 'react'

class Checkbox extends Component {
    render () {
        return (
            <div>
            <input type="checkbox"
            name='myCheckbox'
            checked={this.props.myCheckboxBooleanProps}  
            onChange={this.props.myCheckboxMethodProps}
            />
            {this.props.children}
            </div>
        );
    };
}

export default Checkbox;