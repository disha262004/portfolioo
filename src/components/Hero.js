import React from 'react'

function Hero() {
    return ( 
        <>
        <div className="container-fluid p-5">
            <div className="row p-5 text-center">
                <div>
                    <img src="./media/images/profile.jpg" alt="img" style={{width:"15%", borderRadius:"100%" }} />
                </div>
                <h2 className="mt-4 fw-bold ">Hi there!</h2>
                <p className="mt-2 fs-5">Aspiring <b>Full Stack Development Engineer</b></p>
            </div>
        </div>
        </>
    );
}

export default Hero;