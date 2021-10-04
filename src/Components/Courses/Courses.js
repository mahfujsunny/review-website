import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = (props) => {

    const [courses , setCourses] = useState([]);

    useEffect(()=> {
        fetch('./database.json')
        .then(res => res.json())
        .then(data => setCourses(data[0].courses))
    },[])

    return (
        <div>
            <h2 className="fs-1 fw-bold text-info m-5 heading-text">Courses</h2>
            <div className="row">
                {
                    courses.map(course => <Course
                        course={course}
                    >

                    </Course>)
                }
            </div>
        </div>
    );
};

export default Courses;