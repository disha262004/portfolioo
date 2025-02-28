import React from 'react'
import Experience from './Experience';
function Experinces() {
    return ( 
        <div className="container py-5" id='experience'>
        <h2 className="fw-bold text-center my-5">My Experience</h2>
            <Experience 
                imageUrl="media\images\metablock.webp"
                name="Metablock Technologies" 
                position="Frontend Developer Intern" 
                period="July 2024 - September 2024 - Jaipur, Rajasthan"
            />
        </div>
    
     );
}
export default Experinces;