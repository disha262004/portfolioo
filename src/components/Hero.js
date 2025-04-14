import React from 'react';

function Hero() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="row justify-content-center text-center">
                    <div className="col-12">
                        <img
                            src="./media/images/profile.jpg"
                            alt="Profile"
                            className="img-fluid rounded-circle"
                            style={{ width: "150px", maxWidth: "100%" }}
                        />
                    </div>
                    <div className="col-12 mt-4">
                        <h2 className="fw-bold">Hi there!</h2>
                        <p className="fs-5 mt-2">
                            Aspiring <b>Full Stack Development Engineer</b>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
