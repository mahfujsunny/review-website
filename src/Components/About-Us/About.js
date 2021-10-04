import React from 'react';

const About = () => {

    return (
        <div>
            <h2 className="fs-1 fw-bold text-info m-5 heading-text">About</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="card custom-style">
                        <img src={"https://i.ibb.co/VJXkX7Z/Engineering.jpg"}className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-danger fs-2 fw-bold">5+ Engineering and Tourism Courses </h5>
                        
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card custom-style">
                        <img src={"https://i.ibb.co/jh6jbyF/smiling-young-teacher-near-the-board.jpg"}className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-danger fs-2 fw-bold">30+ Experienced Teacher</h5>
                        
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card custom-style">
                        <img src={"https://i.ibb.co/bRxcLtC/computer-lab.jpg"}className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-danger fs-2 fw-bold">Modern Practical Lab</h5>
                        
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card custom-style">
                        <img src={"https://i.ibb.co/THWtyKq/classroom.jpg"}className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-danger fs-2 fw-bold">Beautiful Organized          Classroom</h5>
                        
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card custom-style">
                        <img src={"https://i.ibb.co/WWwPRw3/polytecnic.jpg"}className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-danger fs-2 fw-bold">Our Campus is Worldwide</h5>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;