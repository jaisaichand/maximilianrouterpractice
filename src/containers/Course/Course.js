import React, { Component } from 'react';

class Course extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
                <p>{this.props.history.location.search.slice(this.props.history.location.search.indexOf('=') + 1, this.props.history.location.search.length)}</p>
            </div>
        );
    }
}

export default Course;