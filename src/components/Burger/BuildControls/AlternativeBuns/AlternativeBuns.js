import React, {Component} from 'react';

class AltBuns extends Component {
    state = { checked: false }

    handleCheckboxChange = (event) =>
        this.setState({ checked: event.target.checked })

    render() {
        return (
            <div>
                <input type ="checkbox"
                 checked={this.state.checked}
                 onChange={this.handleCheckboxChange}/>
                 {this.props.children}
            </div>
        );
    }
}

export default AltBuns;