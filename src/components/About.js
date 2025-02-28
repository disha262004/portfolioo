import React from 'react'
function About() {
    return ( 
        <div className="container-fluid px-5 mb-5" id='about'>
            <div className="row px-5" style={{color:"#00000"}}>
                <h2 className="fw-bold text-center mb-3">About Me</h2>
                <p className=" fs-5">I am currently pursuing a Bachelors of Technology in Computer Science at the Jagannath with a CGPA of 8.0/10 . I have experince of 3 months as an Frontend Developer Intern at Metablock Technologies. My technical expertise includes Java, React.js, Node.js, and Frontend and Backend Technologies. I have contributed to several projects, like Tians Charity Website , Wanderlust - Explore the World , Symon Says Game , Zerodha - A trading platform and many more . </p>
                <p className=" fs-5">I am currently seeking Fall 2025 internship and full-time opportunities where I can contribute, learn, and grow in a challenging environment.</p>
                <div className="row-col text-center my-4">
                    <a href="https://www.linkedin.com/in/disharathore/" className="p-3" ><img src="./media/images/in.png" alt="img"  style={{width:"3%"}}/></a>
                    <a href="https://github.com/disha262004" className="p-3" ><img src="./media/images/github.png" alt="img" style={{width:"3%"}} /></a>
                    <a href="mailto:disharathore126@gmail.com" className="p-3" ><img src="./media/images/gmail.png" alt="img" style={{width:"3%"}} /></a>
                    <a href="https://www.geeksforgeeks.org/user/disha262004/" className="p-3" ><img src="./media/images/gfg.png" alt="img" style={{width:"3%"}} /></a>
                    <a href="https://leetcode.com/u/disha262004/" className="p-3" ><img src="./media/images/leetcode.png" alt="img" style={{width:"3%"}} /></a>
                </div>
            </div>
        </div>
     );
}

export default About;