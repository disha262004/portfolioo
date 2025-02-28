import React from 'react'
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills/Skills';
import Educations from './Education/Educations';
import Experinces from './Experience/Experiences';
import Projects from './Projects/Projects';
import Certifications from './Certifications/Certifications';
import Contact from './Contact';

function Home() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Educations />
        <Skills />
        <Experinces />
        <Projects />
        <Certifications/>
        <Contact/>
        </>
     );
}

export default Home;