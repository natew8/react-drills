import React, { Component } from 'react';

export default class ToDo extends Component {
    render() {
        return <p>{this.props.task}</p>;
    }
}
