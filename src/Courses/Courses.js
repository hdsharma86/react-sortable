import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Course from './Course/Course';
import CourseDetail from './CourseDetail/CourseDetail';

class Courses extends Component {

    state = {
        courses : [
            {id: 'A1', title: 'NodeJs Guide'},
            {id: 'A2', title: 'ReactJs Guide'},
            {id: 'A3', title: 'Angular Guide'},
            {id: 'A4', title: 'AWS Guide'}
        ]
    }

    courseClickHandler = (id, title) => {
        this.props.history.push({
            pathname: '/courses/'+id,
            search: '?title='+title
        });
    }

    render() {
        return (
            <React.Fragment>
                <h3>Courses</h3>
                <div className="row">
                    <div className="col-xs-9">
                        <div className="row">
                            {this.state.courses.map((course) => {
                                return (<Course key={course.id} title={course.title} clicked={() => this.courseClickHandler(course.id, course.title)} />);
                            })}
                        </div>
                    </div>
    
                    <div className="col-xs-3">
                        <Route path={'/courses/:id'} component={CourseDetail} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Courses);