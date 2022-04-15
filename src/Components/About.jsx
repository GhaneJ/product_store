import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">Om oss</h1>
                        <p className="lead mb-4">
                            Hos oss kan du gå hur långt som vill. Vi har ett härligt driv och massor av möjligheter.
                            Vad vill du göra och hur långt vill du gå?
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.jpg" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
