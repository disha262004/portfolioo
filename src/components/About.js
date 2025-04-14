import React from 'react';

function About() {
    return (
        <div className="container-fluid px-4 px-md-5 mb-5" id="about">
            <div className="row justify-content-center" style={{ color: "#000000" }}>
                <div className="col-12 col-md-10">
                    <h2 className="fw-bold text-center mb-4">About Me</h2>
                    <p className="fs-5 text-justify">
                        I am currently pursuing a Bachelors of Technology in Computer Science at Jagannath University with a CGPA of 8.0/10. I have experience of 3 months as a Frontend Developer Intern at Metablock Technologies. My technical expertise includes Java, React.js, Node.js, and both Frontend and Backend Technologies. I have contributed to several projects like Tians Charity Website, Wanderlust - Explore the World, Symon Says Game, Zerodha - A trading platform, and many more.
                    </p>
                    <p className="fs-5 text-justify">
                        I am currently seeking Fall 2025 internship and full-time opportunities where I can contribute, learn, and grow in a challenging environment.
                    </p>
                    <div className="text-center mt-4">
                        <a href="https://www.linkedin.com/in/disharathore/" className="p-2" target="_blank" rel="noopener noreferrer">
                            <img src="./media/images/in.png" alt="LinkedIn" style={{ width: "30px" }} />
                        </a>
                        <a href="https://github.com/disha262004" className="p-2" target="_blank" rel="noopener noreferrer">
                            <img src="./media/images/github.png" alt="GitHub" style={{ width: "30px" }} />
                        </a>
                        <a href="mailto:disharathore126@gmail.com" className="p-2">
                            <img src="./media/images/gmail.png" alt="Gmail" style={{ width: "30px" }} />
                        </a>
                        <a href="https://www.geeksforgeeks.org/user/disha262004/" className="p-2" target="_blank" rel="noopener noreferrer">
                            <img src="./media/images/gfg.png" alt="GFG" style={{ width: "30px" }} />
                        </a>
                        <a href="https://leetcode.com/u/disha262004/" className="p-2" target="_blank" rel="noopener noreferrer">
                            <img src="./media/images/leetcode.png" alt="LeetCode" style={{ width: "30px" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
