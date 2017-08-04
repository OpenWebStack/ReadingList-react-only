import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

class SimpleForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textValue: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        const {onAdd} = this.props;

        onAdd(this.state.textValue);

        this.setState({textValue: ""});
    }

    handleChange(e) {
        this.setState({textValue: e.target.value});
    }

    render() {
        return (
            <div className={styles.container}>
                <span className={styles.title} >Add book by Title or ISBN: </span>
                <input type="text" value={this.state.textValue} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Add Book</button>
            </div>
        )
    }
}

export default SimpleForm;