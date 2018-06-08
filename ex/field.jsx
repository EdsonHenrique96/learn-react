import React, {Component} from 'react';

class Field extends Component {
    constructor(props){
        super(props);
        this.state = { value: props.initialValue };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        console.log('=== componentWillMount 1');
    }

    componentDidMount() {
        console.log('=== componentDidMount 3');
        // this.setState({ value: 'componentDidMount' });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        console.log('=== render 2');
        return (
            <div>
                <label>{this.state.value}</label><br/>
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }
}

export default Field;