import React from 'react';
import './Course.css';

const Course = (props) => {
    const {name , image, description} = props.course

    return (
            <div className="col-md-6 ">
                <div className="card custom-style">
                    <img src={image}className="card-img-top" alt="..."/>
                    <div className="card-body">
                     <h5 className="card-title text-danger fs-2 fw-bold">{name}  </h5>
                     <p className="card-text text-muted">{description}</p>
                    </div>
                </div>
            </div>
    );
};

export default Course;