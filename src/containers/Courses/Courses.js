import React, { Component } from 'react';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    clickedCourse = (coursee) => {
        console.log(coursee)
        console.log(this.props)
        console.log(this.props.location.pathname)
        console.log(coursee.title.slice(0, coursee.title.indexOf(' ')));
        this.props.history.push({
            pathname: this.props.location.pathname + '/' + coursee.title.slice(0, coursee.title.indexOf(' ')),
            search: '?id=' + coursee.id
        })
        //this.props.history.push(this.props.location.pathname + '/' + coursee.title.slice(0, coursee.title.indexOf(' ')))

    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <article onClick={() => { this.clickedCourse(course) }} className="Course" key={course.id}>{course.title}</article>;
                        })
                    }
                </section>
            </div>
        );
    }
}

export default Courses;